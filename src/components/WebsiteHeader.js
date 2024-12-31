import Navbar from "./Navbar"
import './WebsiteHeader.css'

const WebsiteHeader = () => {
    return (
        <header className="website-header">
            <div className="header-main"><Navbar/></div>
            <div className="header-fadeout"/>
        </header>
    )
}

export default WebsiteHeader