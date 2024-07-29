"use client";
import React, { useState, useEffect } from "react";
import FormRewrite from "./component/formrewrite/FormRewrite";
import { TbWriting } from "react-icons/tb";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { message } from "antd"; // Import Ant Design's message component
import styles from "./page.module.css";
import { FaRegClipboard } from "react-icons/fa";
// Function to copy text to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => message.success("Code copied to clipboard!"),
    (err) => message.error("Failed to copy code: " + err)
  );
};

const CodeBlock = ({ language, code }) => {
  return (
    <div className={" mt-3 mb-3 " + styles.holderCode}>
      <div className={' flex items-center justify-between '+styles.holderHeader}>
        <div className=' text-secondary text-12 '>{language}</div>
        <button 
          onClick={() => copyToClipboard(code)}
          className={"text-12 text-secondary flex items-center" +styles.btnCopy}
        >
          <FaRegClipboard className={"text-18 text-secondary "}></FaRegClipboard>
          Copy code
        </button>
      </div>
      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const TextBlock = ({ text }) => {
  console.log(text);
  // Replace newlines with <br /> for rendering in HTML
  const formattedText = text.replace(/(?:\r\n)/g, "<br />");

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

export default function Rewrite() {
  const [response, setResponse] = useState([]);
  const [token, setToken] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (response) {
      // Parse content from the accumulated data
      const parsedContent = parseContent(response);
      setContent(parsedContent);
      // setResponse(''); // Clear the data after parsing
    }
  }, [response]);

  const parseContent = (text) => {
    const content = [];
    let lastIndex = 0;
    const regex = /```(\w+)\n([\s\S]*?)```/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the code block
      if (match.index > lastIndex) {
        content.push({
          type: "text",
          content: text.substring(lastIndex, match.index),
        });
      }
      // Add code block
      content.push({
        type: "code",
        language: match[1],
        code: match[2],
      });
      lastIndex = regex.lastIndex;
    }
    // Add any remaining text after the last code block
    if (lastIndex < text.length) {
      content.push({ type: "text", content: text.substring(lastIndex) });
    }
    return content;
  };

  useEffect(() => {
    if (token === 0) {
      const getToken = async () => {
        const res = await fetch("http://5.78.55.161:8000/v1/api/auth/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@test.com",
            password: "test12345",
          }),
        });
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        setToken(() => {
          return data.access_token;
        });
      };

      getToken();
    }
  }, []);

  const handleTranslate = async ({ request }) => {
    // setResponse(() => {
    //   return "";
    // });
    const fetchAndStream = async () => {
      await fetchEventSource(
        `http://5.78.55.161:8000/v1/api/translates/generate_translate/`,
        {
          method: "POST",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            document_name: "New Document",
            frequency_penalty: 0,
            max_tokens: 100,
            messages: [
              {
                content: request,
                role: "system",
              },
              {
                content: "please enter text here",
                role: "user",
              },
            ],
            model: "gpt-3.5-turbo-0125",
            presence_penalty: 0,
            stream: true,
            temperature: 0.3,
            top_p: 1,
            workspace_id: 245,
          }),
          onopen(res) {
            if (res.ok && res.status === 200) {
              console.log("Connection made ", res);
            } else if (
              res.status >= 400 &&
              res.status < 500 &&
              res.status !== 429
            ) {
              console.log("Client-side error ", res);
            }
          },
          onmessage(event) {
            const parsedData = JSON.parse(event.data).content;

            // Update the accumulated response and the parent component's response
            if (parsedData !== null && parsedData !== "") {
              setResponse((prev) => {
                const updatedResponse = prev + parsedData;

                return updatedResponse;
              });
            }
          },
          onclose() {
            setResponse((prev) => {
              const updatedResponse = prev + "\r\n";

              return updatedResponse;
            });
            console.log("Connection closed by the server");
          },
          onerror(err) {
            console.log("There was an error from server", err);
          },
        }
      );
    };

    fetchAndStream();
  };

  return (
    <div className="flex h-full w-full flex-1 overflow-y-auto  ">
      {/* First Section */}
      <div className="flex-shrink-0 border border-colorline bg-customgray   w-2/5 overflow-y-auto scroll-smooth ">
        <div className="h-80 border-b border-colorline flex pl-36 pr-36   items-center ">
          <TbWriting className="mr-2 text-36  font-bold " />
          <h1 className="text-18 font-medium">ReWrite</h1>
        </div>
        <FormRewrite
          token={token}
          handleTranslate={handleTranslate}
        ></FormRewrite>
      </div>

      {/* Second Section */}
      <div className="flex-grow  overflow-y-auto scroll-smooth p-4">
        {content.map((item, index) =>
          item.type === "text" ? (
            <TextBlock key={index} text={item.content} />
          ) : (
            <CodeBlock key={index} language={item.language} code={item.code} />
          )
        )}
      </div>
    </div>
  );
}
