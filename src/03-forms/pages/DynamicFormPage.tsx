import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        `Min ${(rule as any).value || 1} characteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("The email is not valid");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <button>Submit</button>{" "}
          </Form>
        )}
      </Formik>
    </div>
  );
};
