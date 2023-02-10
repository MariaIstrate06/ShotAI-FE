import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./Login.css"
import AuthService from "../../services/auth.service";
import image from "../../media/img.svg"
import { withRouter } from "../../common/with-router";
import { Link } from "react-router-dom";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.router.navigate("/team");
          console.log("Logged in.")
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
          alert(`⚠Error!⚠: ${this.state.message}`)
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className="picture-container" style={styles.container}>
        </div>
        <div className="login-container">
          <div className="login-centered">
            <div className="login-header">
              <div className="login-title">Login</div>
              <div className="login-description">Please fill your information below.</div>
            </div>
            <div className="login-form">
              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="input-group">
                  <i className="fas fa-user icon" />
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                    placeholder="E-mail"
                  />
                </div>
                <div className="input-group">
                  <i className="fas fa-user icon" />
                  <Input
                    type="password"
                    className="form-control"
                    name="email"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                    placeholder="Password"
                  />
                </div>
                <div className="login-footer">
                  <div className="form-group">
                    <button
                      className="next-button"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Next</span>
                    </button>
                  </div>
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />
                </div>
              </Form>
            </div>
          </div>
          <div className="other-section">
            <hr></hr>
            <div className="options">
              <Link to="/signup">
                <div className="suggestion">
                  Don't have an account?
                </div>
              </Link>
              <Link to="/forgot-password">
                <div className="suggestion blue">
                  Forgot password?
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Login);
