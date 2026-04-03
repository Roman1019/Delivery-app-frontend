import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const schema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("fail email").required("required"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "fail номер")
    .required("required"),
  address: Yup.string().required("required"),
});

export default function MyForm() {
  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: "", email: "", phone: "", address: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
          alert("Дані відправлені!");
        }}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <label htmlFor="phone">Tel</label>
            <Field id="phone" name="phone" placeholder="+380..." />
            <ErrorMessage name="phone" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <label htmlFor="address">Address</label>
            <Field
              id="address"
              name="address"
              placeholder="Enter your address"
            />
            <ErrorMessage
              name="address"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.submit}>
            Відправити
          </button>
        </Form>
      </Formik>
    </div>
  );
}
