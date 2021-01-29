import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import "./Desktopnavigation.css";
import Logotype from "../../../shared/images/logotype.svg";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { Profile } from "../../../components/profile/Profile";
import { DesktopNavigationTabs } from "./desktopnavigationtabs/DesktopNavigationTabs";

export const Desktopnavigation = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const UserLoggedIn = () => {
    return authenticatedUser?.username ? (
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
      <div className="desktopNavigationTabs">
        <DesktopNavigationTabs />
      </div>
      <span>{UserLoggedIn()}</span>
    </div>
  );
};
