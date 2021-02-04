import { useState, useContext } from "react";
import { loginCredentials } from "../shared/interface/Interface";
import { useHistory } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import { UserContext } from "../shared/provider/UserProvider";
import '../shared/css/Global.css'

export const SignInView = () => {
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

  return (
    <div className="body">
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) =>
            setLogInCredentials({
              ...logInCredentials,
              username: event.target.value,
            })
          }
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          onChange={(event) =>
            setLogInCredentials({
              ...logInCredentials,
              password: event.target.value,
            })
          }
        />
        <br />
        <button onClick={() => signIn()}>Sign In!</button>
      </form>

      <h1>{logInCredentials.username}</h1>
      <h1>{logInCredentials.password}</h1>
    </div>
  );
};
