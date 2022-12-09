import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Registreation extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        errors: {
            username: "",
            email: "",
            password: "",
        },
    }
    handelChange = (event) => {
        let { name, value } = event.target;
        let errors = { ...this.state.errors };

        this.setState({ [name]: value, errors });

        switch (name) {
            case 'username':
                let usernameError = value.length < 4 ? "username must 4 charaters" : "";
                errors.username = usernameError
                break;
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
        const { email, password, errors, username } = this.state;
        return (
            <>
                <section>
                    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-12">
                        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                            Register
                        </h1>

                        <form className="mt-6" onSubmit={this.handelSubmit}>
                            <div>
                                <label
                                    for="username"
                                    className="block text-sm text-gray-800 dark:text-gray-200"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    name="username"
                                    value={username}
                                    onChange={this.handelChange}
                                />
                            </div>
                            <span className="error">{errors.username}</span>
                            <div>
                                <label
                                    for="email"
                                    className="block text-sm text-gray-800 dark:text-gray-200"
                                >
                                    email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={this.handelChange}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <span className="error">{errors.email}</span>
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <label
                                        for="password"
                                    >
                                        Password
                                    </label>
                                    <Link
                                        href="#"
                                        className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Forget Password?
                                    </Link>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handelChange}
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <span className="error">{errors.password}</span>
                            <div className="mt-6">
                                <input
                                    className=" text-center w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                    type="sumbmit"
                                    disabled={errors.email || errors.password || errors.username}
                                    value="Sign up"
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </>
        );
    }
}
