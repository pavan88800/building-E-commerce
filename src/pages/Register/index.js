import React, { useState } from "react";
import { Button, Form, Input, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FIELDS, getStore, setStore } from "../../utils/utiles";
import { Header } from "../../components/Header/style";
import { useForm, Controller } from "react-hook-form";
export const Register = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  let UserData = getStore("user");
  let navigate = useNavigate();
  const [isUser, setIsUser] = useState();

  React.useEffect(() => {
    if (isUser) {
      navigate("/login");
    }
  }, [isUser, navigate]);

  const onFinshed = (data) => {
    console.log(data, "data");
    if (data.email === "" || data.password === "") {
      return toast.error("All fields are required", {
        toastId: "error2",
      });
    }
    let exists = UserData.find((item) => item.email === data.email);
    if (exists) {
      return toast.error("User already exists", {
        toastId: "error1",
      });
    }
    UserData.push({
      email: data.email,
      password: data.password,
    });
    setStore("user", UserData);
    setIsUser(true);
  };

  console.log(UserData);
  return (
    <div style={{ overflowY: "hidden" }}>
      <Divider dashed>
        <Header fontSize={"30px"} color={"#000"}>
          REGISTER
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
        >
          {FIELDS.map((item) => (
            <div key={item.key}>
              <Form.Item label={item.label}>
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
            </div>
          ))}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 10,
            }}
          >
            <Button
              onClick={handleSubmit(onFinshed)}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <h4 align="center">
              Have a account <Link to="/login">login</Link>
            </h4>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
