import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: {
            email: "",
            password: "",
        },
    };

    handelChange = (event) => {
        let { name, value } = event.target;
        let errors = { ...this.state.errors };

        this.setState({ [name]: value, errors });

        switch (name) {
            case 'email':
                let emailError = value.indexOf('@') === -1 ? "Email does not contain @" : "";
                errors.email = emailError
                break;
            case 'password':
                let passwordError;
                if (value.length < 7) {
                    passwordError = "password must be 6 charaters";
                }
                let reg = /^(?=.*[A-Za-z])(?=.*\d)/;
                if (!reg.test(value)) {
                    passwordError = "password must contains at least one letter and one number: "
                }
                errors.password = passwordError
                break;
            default:
                return errors;
        }
    };

    handelSubmit = (event) => {
        event.preventDefault();
    };
    render() {
        const { email, Password, errors } = this.state;
        return (
            <>
                <section>
                    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-16">
                        <div className="px-6 py-4">
                            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
                                Login
                            </h2>

                            <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                                Welcome Back
                            </h3>

                            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                                Login or create account
                            </p>

                            <form>
                                <div className="w-full mt-4">
                                    <input
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                        type="email"
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        name="email"
                                        value={email}
                                        onChange={this.handelChange}
                                    />
                                </div>
                                <span className="error">{errors.email}</span>

                                <div className="w-full mt-4">
                                    <input
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                                        type="password"
                                        placeholder="Password"
                                        aria-label="Password"
                                        name="password"
                                        value={Password}
                                        onChange={this.handelChange}
                                    />
                                </div>
                                <span className="error">{errors.password}</span>

                                <div className="flex items-center justify-between mt-4">
                                    <Link
                                        path="/"
                                        className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                                    >
                                        Forget Password?
                                    </Link>

                                    <input
                                        className=" text-center px-0.5 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        type="sumbmit"
                                        disabled={errors.email || errors.password}
                                        value="Sign in"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                            <span className="text-sm text-gray-600 dark:text-gray-200">
                                Don't have an account?{" "}
                            </span>
                            <Route>
                                <Link
                                    to="/Registreation"
                                    className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
                                >
                                    Register
                                </Link>
                            </Route>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
