import { Link } from "react-router-dom"
import { useState } from "react"
import "./nav.css"

export default function Nav() {
    
    const [burger_class, setBurgerClass] = useState("burger-line")
    const [menu_class, setMenuClass] = useState("nav hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateNav = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-line clicked")
            setMenuClass("nav visible")
        }
        else {
            setBurgerClass("burger-line unclicked")
            setMenuClass("nav hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

return (
    <div>
        <div className="burger-icon" onClick={updateNav}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>

    <div className={menu_class}>
        <div className="menu">
        <h1>Menu</h1>
        <Link to="/">
            <h4>Home</h4>
        </Link>
        <Link to="/high-grade">
            <h4>HG</h4>
        </Link>
        <Link to="/master-grade">
            <h4>MG</h4>
        </Link>
        <Link to="/real-grade">
            <h4>RG</h4>
        </Link>
        <Link to="/special">
            <h4>Other</h4>
        </Link>
        <Link to="/create">
            <h4>Add</h4>
        </Link>
    </div>
    </div>
    </div>
    )
}