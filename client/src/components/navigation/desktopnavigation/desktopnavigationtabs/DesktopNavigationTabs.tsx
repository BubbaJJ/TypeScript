import RoutingPath from "../../../../routes/RoutingPath";
import { useHistory } from "react-router-dom";
import "./DesktopNavigationTabs.css";

export const DesktopNavigationTabs = () => {
    const history = useHistory();

    return (
        <ul className="ulTabsWrapper">
            <li className="liTabs" onClick={() => history.push(RoutingPath.homeView)}>Home</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.aboutView)}>About</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.concertsView)}>Concerts</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.calendarView)}>Dates</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.artistsview)}>Artists</li>
        </ul>
    );
};
