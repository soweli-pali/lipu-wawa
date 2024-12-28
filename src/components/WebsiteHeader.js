import Navbar from "./Navbar"
import './WebsiteHeader.css'

const WebsiteHeader = () => {
    return (
        <header className="website-header">
            <h1 className="website-title">kibtry.net</h1>
            <Navbar/>
        </header>
    )
}

export default WebsiteHeader