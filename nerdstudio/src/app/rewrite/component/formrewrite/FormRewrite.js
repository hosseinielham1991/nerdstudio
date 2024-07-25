"use client";
import React, { useEffect, useState } from "react";
import CustomSelect from "../customselected/CustomSelect";
import styles from "./FormRewrite.module.css";
import { languages, otherOption } from "@/data/dataList";
import { useSelector, useDispatch } from "react-redux";
import { FaRobot } from "react-icons/fa";
import { setToken } from "@/features/tokenSlice";
import {
  Form,
  Input,
  Row,
  Col,
  Flex,
  Button,
  Switch,
  ConfigProvider,
} from "antd";

const { TextArea } = Input;
const FormRewrite = ({ setResponse }) => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [advanced, setAdvanced] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getToken = async () => {
    if (token.value === 0) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            "http://5.78.55.161:8000/v1/api/auth/login/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: "test@test.com",
                password: "test12345",
              }),
            }
          );
          if (!res.ok) {
            return;
          }
          const data = await res.json();
          dispatch(setToken(data.access_token));
          return data.access_token;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      let last_token = await fetchData();
      return last_token;
    } else {
      return token.value;
    }
  };

  const handleTranslate = async () => {
    let result_token = await getToken();
    const fetchAndStream = async () => {
      var content = [];
      try {
        const response = await fetch(
          "http://5.78.55.161:8000/v1/api/translates/generate_translate/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${result_token}`, // Replace with your actual token
            },
            body: JSON.stringify({
              document_name: "New Document",
              frequency_penalty: 0,
              max_tokens: 100,
              messages: [
                {
                  content:
                    "You will be provided with a sentence in English, and your task is to translate it into French.",
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
          }
        );

        const reader = response.body
          .pipeThrough(new TextDecoderStream())
          .getReader();

        let buffer = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += value;

          // Process the buffer to handle the streamed data
          const lines = buffer.split("\n");
          buffer = lines.pop(); // Preserve incomplete line

          lines.forEach((line) => {
            if (line.startsWith("data: ")) {
              // Extract the JSON part from the line
              const jsonString = line.substring(6).trim();

              // Manually extract the content field from the JSON string
              const contentMatch = jsonString.match(/"content":\s*"([^"]*)"/);
              if (contentMatch) {
                content.push(contentMatch[1]);
              }
            }
          });

        }

        setResponse(content.join(','))

      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchAndStream();
  };

  const options = [
    { value: "1", label: "ChatGPT 3", icon: FaRobot, class: "text-green-500" },
    { value: "2", label: "ChatGPT 4", icon: FaRobot, class: "text-yellow-500" },
    {
      value: "3",
      label: "ChatGPT 4 Plus",
      icon: FaRobot,
      class: "text-red-500",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9373ee", // Primary color for UI elements
          // colorBorder: "red", // Border color for input fields
          colorBorderHover: "#9373ee", // Border color on hover
          colorBorderFocus: "#9373ee", // Border color on focus
        },
      }}
    >
      <div>
        {isLoaded ? (
          <Form layout="vertical" className="pl-36 pr-36 p-4">
            <Form.Item
              name="target"
              label="Target Text"
              className="font-semibold"
            >
              <TextArea
                style={{ resize: "none" }}
                variant="filled"
                showCount
                placeholder="paste your text that you wish to rewrite or improve ..."
                className={"w-full " + styles.textarea}
                maxLength={200}
              ></TextArea>
            </Form.Item>
            <Form.Item
              name="language"
              label="Language"
              className="font-semibold"
            >
              <CustomSelect
                options={languages}
                placeholder="Select an option"
              />
            </Form.Item>
            <Form.Item name="language">
              <div className="flex flex-row">
                <div>
                  <Switch
                    onChange={(checked) => {
                      setAdvanced(checked);
                    }}
                  />
                </div>
                <div className="flex flex-col pl-2 ">
                  <label className="font-semibold">Advanced</label>
                  <label className="text-sm text-secondary ">
                    More access for more accurate resultsaa
                  </label>
                </div>
              </div>
            </Form.Item>
            {advanced && (
              <>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="Length"
                      label="Length"
                      className="font-semibold"
                    >
                      <CustomSelect
                        options={otherOption}
                        placeholder="Select an option"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="Tone_Of_Voice"
                      label="Tone Of Voice"
                      className="font-semibold"
                    >
                      <CustomSelect
                        options={otherOption}
                        placeholder="Select an option"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="Creativity"
                      label="Creativity"
                      className="font-semibold"
                    >
                      <CustomSelect
                        options={otherOption}
                        placeholder="Select an option"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="Point_of_View"
                      label="Point of View"
                      className="font-semibold"
                    >
                      <CustomSelect
                        options={otherOption}
                        placeholder="Select an option"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="Engine"
                  label="Engine"
                  className="font-semibold"
                >
                  <CustomSelect checkmark={false} options={options} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item name="" label=" " className="font-semibold">
                  <Flex vertical gap="small" style={{ width: "100%" }}>
                    <Button
                      onClick={handleTranslate}
                      className="font-semibold"
                      type="primary"
                    >
                      Rewrite
                    </Button>
                  </Flex>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        ) : (
          <div className="w-full flex justify-center">Loading...</div>
        )}
      </div>
    </ConfigProvider>
  );
};

export default FormRewrite;
