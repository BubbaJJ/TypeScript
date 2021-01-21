import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import {AboutView} from '../views/AboutView'
import RoutingPath from './RoutingPath'
import { SignInView } from '../views/SignInView'

/// [] Array vid flera children. Ta bort om man endast kör en.
export const Routes = (props: { children: React.ReactChild[] }) => {
    const { children } = props

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
    )
}