import React, { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("user");
    setAuthenticatedUser(null);
    history.push(RoutingPath.homeView);
  };

  return (
    <div className="profileWrapper">
      <img
        className="photo"
        src="http://thispersondoesnotexist.com/image"
        alt=""
      />
      {authenticatedUser.username}
      <div className="profileDropdown">
        <span>Alt 1</span>
        <span>Alt 2</span>
        <span>Alt 3</span>
        <span onClick={() => signOut()}>Log out</span>
      </div>
    </div>
  );
};
