  import { Link, useLoaderData, Form } from "react-router-dom";
  
  function Show() {
    const kit = useLoaderData()

    const id = kit?.url.split("/")[4]

    return (
      <div className="container">
     <div className="card">
        <img src={kit.box_art} alt={kit.box_art} />
        <h1>{kit.name}</h1>
        <h2>Bandai Kit #{kit.model_id}</h2>
        <h2>{kit.release_date}</h2>
     </div>
     <div className="buttons">
      <Link to="/">
      <button>Return</button>
      </Link>
      <Link to="/update">
      <button>Edit</button>
      </Link> 
      <Form action={`/delete/${id}/`} method="POST">
      <button>Delete</button>
      </Form> 
     </div>
     </div>
    )
 }
 
 export default Show;