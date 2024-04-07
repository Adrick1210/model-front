import { Link } from "react-router-dom"

export default function Nav() {

return (
    <div className="nav">
        <Link to="/">
            <h4>Index</h4>
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
    )
}