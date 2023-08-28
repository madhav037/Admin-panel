import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="blackLayer"></div>
      <div className="Logo-bar">
        <img src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png" />
      </div>
      <div className="signinbox">
        <div id="signin-text">Sign In</div>
        <input
          type="text"
          id="email-phonenumber"
          placeholder="Email or phone number"
        />
        <br />
        <input type="password" id="password" placeholder="Password" />
        <br />
        <button id="sign-in">Sign in</button>
        <div>
          <input type="checkbox" id="remeber-me" /> Remember me
          <p id="need-help">Need help?</p>
        </div>
      </div>
    </>
  );
}
