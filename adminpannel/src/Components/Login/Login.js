import { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  let [emailNumber, setEmailNumber] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      <div className="blackLayer"></div>
      <div className="Logo-bar">
        <img
          src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png"
          alt="logo"
        />
      </div>
      <div className="signinbox">
        <div id="signin-text">Sign In</div>
        <input
          type="text"
          id="email-phonenumber"
          placeholder="Email or phone number"
          onChange={(e) => {
            setEmailNumber((emailNumber = e.target.value));
          }}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword((password = e.target.value));
          }}
        />
        <br />
        <button
          id="sign-in"
          onClick={() => {
            fetch("http://localhost:5000/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                emailNumber: emailNumber,
                password: password,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data === "success") {
                  // ! ADD Route to next page
                  console.log("add route to next page");
                }else {
                  alert("wrong password")
                }
              });
          }}
        >
          Sign in
        </button>
        <div>
          <input type="checkbox" id="remeber-me" /> Remember me
          <p id="need-help">Need help?</p>
        </div>
      </div>
    </>
  );
}
