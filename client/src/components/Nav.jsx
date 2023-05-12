import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ isOpen, handleViewSidebar}) => {
    const router = useRouter()
    const sidebarClass = isOpen ? "sidebar open" : "sidebar";
    return (
        <div className="main-nav">
            <div className="header">
                <button className="logo" onClick={() => router.push('/')}>KVD</button>
                <button className="btn-nav" onClick={handleViewSidebar}>nav</button>
            </div>
            <nav className={sidebarClass}>
                <ul>
                    <li onClick={handleViewSidebar}><Link href='/'>Home</Link></li>
                    <li onClick={handleViewSidebar}><Link href='#about'>About</Link></li>
                    <li onClick={handleViewSidebar}><Link href='#projects'>Projects</Link></li>
                    <li onClick={handleViewSidebar}><Link href='#contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav