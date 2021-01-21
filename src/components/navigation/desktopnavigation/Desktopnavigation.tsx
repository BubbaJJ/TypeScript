import React from 'react'
import './Desktopnavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const Desktopnavigation = () => {
    const history = useHistory()

    return (
        <div className="DesktopnavigationWrapper">
            <img className="navigationIcon" src={Logotype} alt={''} />
            <span className="hover" onClick={() => history.push(RoutingPath.homeView)}>Home</span>
            <span className="hover" onClick={() => history.push(RoutingPath.aboutView)}>About</span>
            <span className="hover" onClick={() => history.push(RoutingPath.homeView)}>Concerts</span>
            <span className="hover" onClick={() => history.push(RoutingPath.homeView)}>Dates</span>
            <span className="hover" onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
        </div>
    )
}
