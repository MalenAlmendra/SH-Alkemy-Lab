import React from "react";
import { Formik, Field, Form } from "formik";

const Login = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="lastName"
            placeholder="********"
            type="password"
          />
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
