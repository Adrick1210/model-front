  import { Link, useLoaderData } from "react-router-dom";
  
  function Show() {
    const kit = useLoaderData()

    return (
      <div>
     <div>
        <img src={kit.box_art} alt={kit.box_art} />
        <h1>{kit.name}</h1>
        <h2>Bandai Kit #{kit.model_id}</h2>
     </div>
     <div>
      <Link to="/">
      <button>Return</button>
      </Link>
        
     </div>
     </div>
    )
 }
 
 export default Show;