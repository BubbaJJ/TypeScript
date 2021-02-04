import './HamburgerButton.css'

export const HamburgerButton = (props: { sidebarHandler: Function }) => {
    return (
        <button className="toggle-button" onClick={() => props.sidebarHandler(true)}>
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
        </button>
    )
}