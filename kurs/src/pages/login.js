const Login = ({ isLoggedIn, onLogin }) => {
    if (isLoggedIn) {
      // Redirect to the home page if already logged in
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={onLogin}>Log In</button>
      </div>
    );
  };

  export default Login;