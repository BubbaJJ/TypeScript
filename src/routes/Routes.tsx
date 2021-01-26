import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { AboutView } from "../views/AboutView";
import RoutingPath from "./RoutingPath";
import { SignInView } from "../views/SignInView";
import { UserContext } from "../shared/provider/UserProvider";
import { useEffect, useContext } from "react";

/// [] Array vid flera children. Ta bort om man endast kör en.
export const Routes = (props: { children: React.ReactChild }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const { children } = props;

  useEffect(() => {
    if (!authenticatedUser && localStorage.getItem("user"))
      setAuthenticatedUser({ username: localStorage.getItem("user") });
  });

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
