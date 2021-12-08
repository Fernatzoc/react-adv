import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "The name must be 3 characteres")
            .required("required"),
          email: Yup.string().email("Check email format").required("Required"),
          password1: Yup.string()
            .min(6, "Min 6 characteres")
            .required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "The passwords is not equals")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Fernando" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="correo@correo.com"
            />
            <MyTextInput label="Password" type="password" name="password1" />
            <MyTextInput
              label="Repeat Password"
              type="password"
              name="password2"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
