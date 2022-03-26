import "./Authentication.css";

export function Login() {
  return (
      <>
    <main className="main-container flex ai-start jc-center">
      <form className="authentication-container flex flex-column ai-left p-md2 m-xs dark">
        <h1 className="title m-s m-rl0 fs-3 fw-600">Log in</h1>
        <div className="input-wrapper m-xxxs m-rl0">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="johndoe@gmail.com"
            className="input p-xxs m-xxs m-rl0 bd-rad-sm"
          />
          <label className="success-msg m-xxs m-rl0">
            Success! Email entered is correct.
          </label>
        </div>
        <div className="input-wrapper m-xxxs m-rl0">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper bd-rad-sm input-w-btn flex flex-row ai-center m-xxs m-rl0">
              <input
                type="text"
                className="p-xxs input"
                placeholder="password"
              />
              <div className="p-xxs gray-text input-btn">
                <i className="fa-solid fa-eye" />
              </div>
            </div>
            <label className="error-msg">Wrong Password. Try again.</label>
          </div>
        <button type="submit" className="btn btn-primary m-xxs m-rl0">
          LOGIN
        </button>
        <p className="m-xxs m-rl0 center-align-text">
          New User?{" "}
          <a className="primary-color-text" href="/pages/signup/signup.html">
            Sign Up!
          </a>
          .
        </p>
        <a  className="primary-color-text center-align-text m-xxs m-rl0">
          Use Guest Credentials.
        </a>
      </form>
    </main>
    </>
  );
}
