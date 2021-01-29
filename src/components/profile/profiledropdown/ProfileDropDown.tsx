import "./ProfileDropDown.css";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";

export const ProfileDropDown = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const signOut = () => {
    localStorage.removeItem("user");
    setAuthenticatedUser(false);
    history.push(RoutingPath.homeView);
  };

  return (
    <div className="profileDropdown">
      <span>Alt 1</span>
      <span>Alt 2</span>
      <span>Alt 3</span>
      <span onClick={() => signOut()}>Log out</span>
    </div>
  );
};
