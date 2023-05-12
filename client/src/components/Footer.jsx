import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer">
            <h2>Kristina Van-Bergen DeSilva</h2>
            <div className="footer-nav">
                <nav>
                    <p>Sitemap</p>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='#about'>About</Link></li>
                        <li><Link href='#projects'>Projects</Link></li>
                        <li><Link href='#contact'>Contact</Link></li>
                    </ul>
                </nav>
                <div className="footer-icons">
                    <p>Socials</p>
                    <p>icons go here.</p>
                </div>
            </div>
            <p className="copyright">&copy; Copyright 2023. Made by Kristina Van-Bergen DeSilva</p>
        </div>
    )
}

export default Footer