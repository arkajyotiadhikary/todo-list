import React from "react";

const Signin = () => {
    return (
        <div className="container h-100 w-100 d-flex justify-content-center align-items-center">
            <div>
                <div
                    className="form-banner w-100 d-flex justify-content-center align-items-center"
                    style={{
                        backgroundColor: "#a2d2ff",
                        height: "4rem",
                        borderRadius: "5px",
                        marginBottom: "1rem",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff6f9",
                    }}
                >
                    Sign In
                </div>
                <form className="px-1">
                    <div className="form-group text-start">
                        <label className="form-label" htmlFor="">
                            Email
                        </label>
                        <input className="form-control" type="email" required />
                    </div>
                    <div className="form-group text-start">
                        <label className="form-label" htmlFor="">
                            Password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            required
                        />
                    </div>
                    <button
                        type="sumbit"
                        className="btn mt-3 px-4"
                        style={{
                            float: "right",
                            backgroundColor: "#ffc8dd",
                            fontWeight: "bold",
                            color: "#fff6f9",
                        }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
