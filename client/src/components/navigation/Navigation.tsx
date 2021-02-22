import React from 'react'
import './Navigation.css';
import { Desktopnavigation } from './desktopnavigation/Desktopnavigation'
import { Mobilenavigation } from './mobilenavigation/Mobilenavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = () => {
    const { height, width } = useWindowDimensions()

    const displayNavigationDependingOnDevice = () => {
        return (width < 1000)
            ? <Mobilenavigation />
            : <Desktopnavigation />
    }

    return (
        <div>
            {displayNavigationDependingOnDevice()}
        </div>
    )
}