import { Link } from "react-router-dom"
import "./BarraNav.css"


export const BarraNav = () => {

    return (
        <div className="divContainer">
            <Link to="/" className="logoContainer">
                <img src="/logo.png" alt="" className="italiaLogo" />
            </Link>
        </div>

    )
}



