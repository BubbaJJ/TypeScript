import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";
import { ProfileDropDown } from "./profiledropdown/ProfileDropDown";

export const Profile = () => {
  const [authenticatedUser] = useContext(UserContext);
  return (
    <div className="profileWrapper">
      <img className="photo" src="http://thispersondoesnotexist.com/image" alt="" />
      {authenticatedUser.username}
      <ProfileDropDown />
    </div>
  );
};
