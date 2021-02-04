import { useState } from 'react'
import './Mobilenavigation.css'
import { Sidebar } from './sidebar/Sidebar'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'


export const Mobilenavigation = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)
    return (
        <div>
            <HamburgerButton sidebarHandler={setOpenSidebar} />
            <Sidebar sidebarIsOpen={openSidebar} sidebarHandler={setOpenSidebar} />
        </div>
    )
}
