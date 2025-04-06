import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";

import { CustomInpute } from "@components/customInpute/CustomInpute";
import { useEffect, useRef, useState } from "react";
import useForm from "../../hooks/useForm";
import { requestPassResetOTPApi, resetPassApi } from "../../services/authAPI";
import { useNavigate } from "react-router-dom";

const initialState = {};
const timeToRequestOTPAgain = 10; //s

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false);

  const [isOtpPending, setIsOtpPendig] = useState(false);
  const [isOtpBtnDisabled, setIsOtpBtnDisabled] = useState(false);

  const [counter, setCounter] = useState(0);

  const { form, passwordErrors, handleOnChange } = useForm(initialState);

  useEffect(() => {
    if (counter > 0) {
      // setIsOtpBtnDisabled(true);
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsOtpBtnDisabled(false);
    }
  }, [counter]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    //call api
    setIsOtpPendig(true);
    setIsOtpBtnDisabled(true);

    const response = await requestPassResetOTPApi({ email });
    if (response?.status === "success") {
      setShowPassResetForm(true);
    }
    setIsOtpPendig(false);
    // setIsOtpBtnDisabled(false);
    setCounter(timeToRequestOTPAgain);
  };

  const handleOnPasswordRestSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    const payload = {
      email,
      otp: form.otp,
      password: form.password,
    };

    const response = await resetPassApi(payload);
    if (response?.status === "success") {
      //redirect user to login page in 3s

      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div className="sing-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password 😡?</Card.Title>
          <p>
            Don't worry. Fill up the form below to request OTP to reset your
            password.
          </p>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInpute
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              passRef={emailRef}
            />

            <div className="d-grid">
              <Button type="submit" disabled={isOtpBtnDisabled}>
                {isOtpPending ? (
                  <Spinner variant="border" />
                ) : counter > 0 ? (
                  `Request OTP in  ${counter}`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>
          {showPassResetForm && (
            <>
              <hr />

              {/* show this form below onc otp is requested */}

              <div>
                <Alert variant="success">
                  We will send you an OTP to your email, if email is found in
                  our system. Plese check your junk/spam folder if you don't see
                  emailin the inbox.
                </Alert>

                <Form onSubmit={handleOnPasswordRestSubmit}>
                  <CustomInpute
                    label="OTP"
                    name="otp"
                    type="number"
                    required
                    placeholder="2345"
                    onChange={handleOnChange}
                  />
                  <CustomInpute
                    label="New Password"
                    name="password"
                    type="password"
                    required
                    placeholder="********"
                    onChange={handleOnChange}
                  />
                  <CustomInpute
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="********"
                    onChange={handleOnChange}
                  />
                  <div className="py-3">
                    <ul className="text-danger">
                      {passwordErrors.length > 0 &&
                        passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                    </ul>
                  </div>
                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Reset Password{" "}
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}

          <div className="text-end my-3">
            Ready to Login? <a href="/login">Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
