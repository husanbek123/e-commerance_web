import { Form, Input, Button, message } from "antd";
import React, { useState } from "react";
import { usePostData } from "../../hooks/useQueryHook";
import c from "../About/about.module.scss";

function About() {
  const [data, setData] = useState();

  const PostData = usePostData("/message");

  const onFinish = (e) => {
    setData(e);
  };

  let obj = {
    ...data,
    status: "PENDING",
  };

  const sumbitData = () => {
    PostData.mutate(obj, {
      onSuccess: (data) => message.success("Xabar yuborld"),
      onError: (err) => message.error("Xabaringiz intrnet sababli jonatlmad"),
    });
  };

  return (
    <div className={c.form}>
      <h1>Massage</h1>
      <Form onFinish={onFinish} className={c.form__wrapper}>
        <h5 className={c.form__title}>Tel raqamingizni kirting</h5>
        <Form.Item name="phone">
          <Input
            className={c.form__input}
            placeholder="+998-___-__-__"
            maxLength={20}
            allowClear
          />
        </Form.Item>
        <h5 className={c.form__title}>Qanday ish boycha</h5>
        <Form.Item name="subject">
          <Input className={c.form__input} placeholder="" allowClear />
        </Form.Item>
        <h5 className={c.form__title}>Xabar yozish</h5>
        <Form.Item name="message">
          <Input.TextArea className={c.form__input} placeholder="" allowClear />
        </Form.Item>
        <Button
          onClick={sumbitData}
          htmlType="submit"
          className={c.form__btn}
          block
          type="primary"
        >
          Send
        </Button>
      </Form>
    </div>
  );
}

export default About;
