import { useState, useContext } from "react";
import { loginCredentials } from "../shared/interface/Interface";
import { useHistory } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import '../shared/css/Global.css'

export const SignInView = (props: any) => {
  const history = useHistory();
  const [logInCredentials, setLogInCredentials] = useState<loginCredentials>({
    username: "",
    password: "",
  });
  const [, setAuthenticatedUser] = useContext(UserContext);

  const signIn = () => {
    localStorage.setItem("user", logInCredentials.username);
    setAuthenticatedUser(logInCredentials);
    history.push(RoutingPath.homeView);
  };

  const handleCredentialsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogInCredentials({ ...logInCredentials, [event.target.name]: event.target.value });
  }

  return (
    <div className="body">
      <form>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleCredentialsInput}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          onChange={handleCredentialsInput}
        />
        <br />
        <button onClick={() => signIn()}>Sign In!</button>
      </form>

      <h1>{logInCredentials.username}</h1>
      <h1>{logInCredentials.password}</h1>
    </div>
  );
};
