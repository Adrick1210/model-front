import { Link } from "react-router-dom"

export default function Kit({ kit }) {

    const id = kit.url.split('/')[4]

    return (
    <div className="kit_art">
        <Link to={`/kits/${id}`}>
        <img src={kit.box_art} alt={kit.box_art} />
        </Link>
    </div>
    )
}