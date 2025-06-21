import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/Authcontext";
import { BASE_URL } from "../Shared/utils/config";
import { notifyError, notifySuccess } from "../Shared/utils/toast";
import "../styles/login.css";
import LoginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      notifySuccess("Successfully logged in");
      navigate("/");
    } catch (err) {
      notifyError(err.message);
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
    tap: { scale: 0.98 },
    loading: {
      scale: 0.98,
      opacity: 0.8,
    },
  };

  return (
    <section className="login-section">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <motion.div
              className="login_container"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div className="login_img" variants={itemVariants}>
                <motion.img
                  src={LoginImg}
                  alt="Login illustration"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </motion.div>

              <motion.div className="login_form" variants={containerVariants}>
                <motion.div
                  className="user"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={userIcon} alt="User icon" />
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-center mb-4">
                  Welcome Back
                </motion.h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <motion.div variants={itemVariants}>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        required
                        onChange={handleChange}
                        value={credentials.email}
                        className="form-control"
                      />
                    </motion.div>
                  </FormGroup>

                  <FormGroup>
                    <motion.div variants={itemVariants}>
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        required
                        onChange={handleChange}
                        value={credentials.password}
                        className="form-control"
                      />
                    </motion.div>
                  </FormGroup>

                  <motion.div variants={itemVariants}>
                    <Button
                      className="btn secondary__btn auth__btn w-100"
                      type="submit"
                      disabled={isSubmitting}
                      variants={buttonVariants}
                      whileHover={!isSubmitting ? "hover" : ""}
                      whileTap={!isSubmitting ? "tap" : ""}
                      animate={isSubmitting ? "loading" : "visible"}
                    >
                      {isSubmitting ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </motion.div>
                </Form>

                <motion.p className="text-center mt-3" variants={itemVariants}>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary">
                    Create one
                  </Link>
                </motion.p>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
