import { Link } from "react-router-dom"

export default function Kit({ kit }) {
    return (
    <div>
        <Link to={`/kits/${kit._id}`}>
        <img src={kit.box_art} alt={kit.box_art} />
        </Link>
    </div>
    )
}