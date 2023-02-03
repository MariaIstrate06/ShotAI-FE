import React from 'react';
import './Login.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";


export default function Login() {
  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  return (
    <>
      <p>pl</p>
      <Form
        onSubmit={this.handleLogin}
        ref={c => { this.form = c; }}
      >
        <Input
          type="text"
          className="form-control"
          validations={[required, email]}
        />

        <CheckButton
          style={{ display: "none" }}
          ref={c => { this.checkBtn = c; }}
        />
      </Form>
      {/* <p>pula</p> */}
    </>
  )
}