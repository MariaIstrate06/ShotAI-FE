import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./EmailValidation.css"
import { ROOT } from "../../utility.js";
import axios from "axios";
import image from "../../media/img.svg"
import { withRouter } from "../../common/with-router";
import { Link, useParams } from "react-router-dom";

const styles = {
  container: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%'
  }
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



const Login = () => {
  const [password, setPassword] = useState("");
  const id = useParams();
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSendPassword = (password) => {
    axios
      .post(`${ROOT}/auth/signup/${id}`, password)
      .then((response) => {
        console.log("rasp din validat: ", response.data.message);
      })
      .catch((error) => {
        console.log("player: ", password)
        console.error(error);
      });
  };

  return (
    <div className="page-container">
      <div className="picture-container" style={styles.container}>
      </div>
      <div className="login-container">
        <div className="login-centered">
          <div className="login-header">
            <div className="login-title">Password set</div>
            <div className="login-description">Please set a password for your account.</div>
          </div>
          <div className="login-form">
            <Form
              onSubmit={handleSendPassword}
            >
              <div className="input-group">
                <i className="fas fa-user icon" />
                <Input
                  type="password"
                  className="form-control"
                  name="email"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  placeholder="Password"
                />
              </div>
              <div className="login-footer">
                <div className="form-group">
                  <button
                    className="next-button"
                  >
                    <span className="spinner-border spinner-border-sm"></span>
                    <span>Next</span>
                  </button>
                </div>
                <CheckButton
                  style={{ display: "none" }}
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="other-section">
          <hr></hr>
          <div className="options">
            <Link to="/login">
              <div className="suggestion">
                Already have an account?
              </div>
            </Link>
            <Link to="/forgot-password">
              <div className="suggestion blue">
                Looking for Forgot Password?
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>

  );
}

export default withRouter(Login);
