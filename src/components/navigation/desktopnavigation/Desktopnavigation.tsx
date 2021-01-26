import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import "./Desktopnavigation.css";
import Logotype from "../../../shared/images/logotype.svg";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { Profile } from "../../../components/profile/Profile";

export const Desktopnavigation = () => {
  const history = useHistory();
  const [authenticatedUser] = useContext(UserContext);

  const UserLoggedIn = () => {
    return authenticatedUser ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <span
        className="signInButton"
        onClick={() => history.push(RoutingPath.signInView)}
      >
        Sign in
      </span>
    );
  };

  return (
    <div className="DesktopnavigationWrapper">
      <img
        className="navigationIcon"
        src={Logotype}
        alt={""}
        onClick={() => history.push(RoutingPath.homeView)}
      />
      <span
        className="hover"
        onClick={() => history.push(RoutingPath.homeView)}
      >
        Home
      </span>
      <span
        className="hover"
        onClick={() => history.push(RoutingPath.aboutView)}
      >
        About
      </span>
      <span
        className="hover"
        onClick={() => history.push(RoutingPath.homeView)}
      >
        Concerts
      </span>
      <span
        className="hover"
        onClick={() => history.push(RoutingPath.homeView)}
      >
        Dates
      </span>
      <span>{UserLoggedIn()}</span>
    </div>
  );
};
