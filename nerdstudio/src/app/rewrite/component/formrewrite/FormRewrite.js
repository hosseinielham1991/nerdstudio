"use client";
import React, { useEffect, useState } from "react";
import CustomSelect from "../customselected/CustomSelect";
import styles from "./FormRewrite.module.css";
import { languages, otherOption } from "@/data/dataList";
import { FaRobot } from "react-icons/fa";

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

const FormRewrite = ({ handleTranslate, token }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [formValue, setFormValue] = useState(
   {target: ""}
  );
  const [form] = Form.useForm(); // Get form instance
  //const accumulatedResponse // State to accumulate responses

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
          colorBorderHover: "#9373ee", // Border color on hover
          colorBorderFocus: "#9373ee", // Border color on focus
        },
      }}
    >
      <div>
        {isLoaded ? (
          <Form
            form={form}
            layout="vertical"
            className="pl-36 pr-36 p-4"
            initialValues={formValue}
          >
            <Form.Item
              name="target"
              label="Target Text"
              className="font-semibold"
            >
              <TextArea
                style={{ resize: "none" }}
                variant="filled"
                showCount
                onChange={(e) => {
                  setFormValue({ target: e.target.value}); // Update local state on change
                  form.setFieldsValue({ target: e.target.value }); // Update form value
                }}
                placeholder="Paste your text that you wish to rewrite or improve ..."
                className={"w-full " + styles.textarea}
                maxLength={200}
              />
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
                  <Switch onChange={(checked) => setAdvanced(checked)} />
                </div>
                <div className="flex flex-col pl-2">
                  <label className="font-semibold">Advanced</label>
                  <label className="text-sm text-secondary">
                    More access for more accurate results
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
                      disabled={token === 0}
                      onClick={() => {
                        handleTranslate({request: formValue.target });
                        setFormValue({ target: ''}); // Update local state on change
                        form.setFieldsValue({ target: '' }); // Update form value
                      }}
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
