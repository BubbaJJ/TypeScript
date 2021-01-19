import React from 'react'
import './Desktopnavigation.css'
import Logotype from '../../../shared/images/logotype.svg'

export const Desktopnavigation = () => {
    return (
        <div className="DesktopnavigationWrapper">
            <img className="navigationIcon" src={Logotype} alt={''}/>
        </div>
    )
}
