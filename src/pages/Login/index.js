import React, { useState } from "react";
import { Button, Form, Input, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getStore, setStore, FIELDS } from "../../utils";
import { Header } from "../../components/Header/style";
import { useForm, Controller } from "react-hook-form";
export const Login = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //Current User
  let currentUser = getStore("currentUser");
  let navigate = useNavigate();
  let UserData = getStore("user");
  const [isUser, setIsUser] = useState("");

  React.useEffect(() => {
    if (isUser) {
      navigate("/");
    }
  }, [isUser, navigate]);

  const onFinish = (data) => {
    const { email, password } = data;
    if (email === "" || password === "") {
      return toast.error("All fields are required", {
        toastId: "error4",
      });
    }
    let exists = UserData.find((item) => item.email === email);
    if (
      exists === undefined ||
      exists.email !== email ||
      exists.password !== password
    ) {
      return toast.error("Invalid Credentials", {
        toastId: "error3",
      });
    }
    setIsUser(true);
    currentUser = {
      email,
    };
    setStore("currentUser", currentUser);
  };

  return (
    <div style={{ overflowY: "hidden" }}>
      <Divider dashed>
        <Header fontSize={"30px"} color={"#000"}>
          LOGIN
        </Header>
      </Divider>

      <div className="input-container">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 50,
          }}
          autoComplete="off"
          onFinish={onFinish}
        >
          {FIELDS.map((item) => (
            <Form.Item label={item.label} key={item.key}>
              <Controller
                name={item.value}
                control={control}
                render={({ field }) =>
                  item.value === "password" ? (
                    <Input.Password {...field} />
                  ) : (
                    <Input {...field} />
                  )
                }
              />
            </Form.Item>
          ))}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 10,
            }}
          >
            <Button
              onClick={handleSubmit(onFinish)}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <h4 align="center">
              Don't Have account <Link to="/register">Register</Link>
            </h4>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
