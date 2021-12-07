import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyChecbox, MyTextInput, MySelect } from "../components";

import "../styles/styles.css";

export const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formik Abstract Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or fewer")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or fewer ")
            .required("Required"),
          email: Yup.string().email("Must be email valid").required("Required"),
          terms: Yup.boolean().oneOf([true], "Must be accept the conditions"),
          jobType: Yup.string().notOneOf(
            ["it-jr"],
            "This options is not allowed"
          ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={"First Name"}
              name={"firstName"}
              placeholder="Fernando"
            />
            <MyTextInput
              label={"Last Name"}
              name={"lastName"}
              placeholder="Reginaldo"
            />

            <MyTextInput
              name={"email"}
              label={"Email Address"}
              placeholder="Email"
              type="email"
            />

            <MySelect label="jobType" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Junior</option>
            </MySelect>

            <MyChecbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
