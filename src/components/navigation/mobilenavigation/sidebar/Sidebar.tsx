import { useHistory } from 'react-router-dom';
import RoutingPath from '../../../../routes/RoutingPath';
import './Sidebar.css';
import * as io5 from 'react-icons/io5';


export const Sidebar = (props: { sidebarIsOpen: boolean, sidebarHandler: Function }) => {
    const history = useHistory();
    const handleRedirect = (selectedView: string) => {
        history.push(selectedView);
        props.sidebarHandler(false);
    }


    return (
        <div className={props.sidebarIsOpen ? 'sidebar open' : 'sidebar'}>
            <ul>
                <li onClick={() => handleRedirect(RoutingPath.homeView)}><io5.IoHome />Home</li>
                <io5.IoCloseSharp /><li onClick={() => props.sidebarHandler(false)}>Close!</li>
                <io5.IoImages /><li>Images</li>
                <io5.IoCalendarSharp /><li>Dates</li>
            </ul>
        </div>
    )
}
