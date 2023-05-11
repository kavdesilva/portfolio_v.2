import Link from "next/link";

const Nav = ({ isOpen, handleViewSidebar}) => {
    const sidebarClass = isOpen ? "sidebar open" : "sidebar";
    return (
        <div className="nav">
            <div className="header">
                <h3 className="logo">KVD</h3>
                <button className="btn-nav" onClick={handleViewSidebar}>nav</button>
            </div>
            <div className={sidebarClass}>
                <div><Link href='/'>Home</Link></div>
                <div><Link href='#about'>About</Link></div>
                <div><Link href='#projects'>Projects</Link></div>
                <div><Link href='#contact'>Contact</Link></div>
            </div>
        </div>
    )
}

export default Nav