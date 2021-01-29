import { BrowserRouter, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import { HomeView } from "../views/HomeView";
import { AboutView } from "../views/AboutView";
import { SignInView } from "../views/SignInView";
import { ConcertsView } from "../views/navigationtabviews/concerts/ConcertsView";
import { CalendarView } from "../views/navigationtabviews/calendar/CalendarView";
import { ArtistsView } from "../views/navigationtabviews/artists/ArtistsView";
import { UserContext } from "../shared/provider/UserProvider";
import { useEffect, useContext } from "react";

/// [] Array vid flera children. Ta bort om man endast kör en.
export const Routes = (props: { children: React.ReactChild }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const { children } = props;

  useEffect(() => {
    setAuthenticatedUser({ username: localStorage.getItem("user") });
  });

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route exact path={RoutingPath.concertsView} component={ConcertsView} />
        <Route exact path={RoutingPath.calendarView} component={CalendarView} />
        <Route exact path={RoutingPath.artistsview} component={ArtistsView} />

        <Route component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
};
