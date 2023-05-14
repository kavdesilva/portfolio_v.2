import Link from "next/link"

const Footer = ({devMode}) => {
    console.log(devMode)
    return (
        <div className="footer">
            <div className={!devMode ? "dev-mode" : "footer-nav"}>
                <nav>
                    <h2>Sitemap</h2>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='#about'>About</Link></li>
                        <li><Link href='#projects'>Projects</Link></li>
                        <li><Link href='#contact'>Contact</Link></li>
                    </ul>
                </nav>
                <div className="footer-icons">
                    <h2>Socials</h2>
                    <p className="gradient-text">icons go here.</p>
                </div>
            </div>
            <p className="copyright">&copy; Copyright 2023. Built by Kristina Van-Bergen DeSilva.</p>
        </div>
    )
}

export default Footer