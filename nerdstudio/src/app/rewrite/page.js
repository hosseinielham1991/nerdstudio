"use client";
import React, { useState, useEffect, useSelector } from "react";
import FormRewrite from "./component/formrewrite/FormRewrite";
import { TbWriting } from "react-icons/tb";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Dashboard() {
  const [response, setResponse] = useState(null);

  return (
    <Provider store={store}>
      <div className="flex h-full w-full flex-1 overflow-y-auto  ">
        {/* First Section */}
        <div className="flex-shrink-0 border border-colorline bg-customgray   w-2/5 overflow-y-auto scroll-smooth ">
          <div className="h-80 border-b border-colorline flex pl-36 pr-36   items-center ">
            <TbWriting className="mr-2 text-36  font-bold " />
            <h1 className="text-18 font-medium">ReWrite</h1>
          </div>
          <FormRewrite
            setResponse={(newresponse) => {
              setResponse(response + newresponse);
            }}

            response={response}
          ></FormRewrite>
        </div>

        {/* Second Section */}
        <div className="flex-grow  overflow-y-auto scroll-smooth">{response}</div>
      </div>
    </Provider>
  );
}
