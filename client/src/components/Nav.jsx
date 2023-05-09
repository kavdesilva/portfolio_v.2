const Nav = (props) => {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    return (
        <div className="nav">
            <div className="header">
                <button onClick={props.onClick}>nav</button>
            </div>
            <div className={sidebarClass}>
                <div>Home</div>
                <div>About</div>
                <div>Portfolio</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default Nav