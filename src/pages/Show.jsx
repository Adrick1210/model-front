  import { Link, useLoaderData, Form } from "react-router-dom";
  
  function Show() {
    const kit = useLoaderData()

    const id = kit?.url.split("/")[4]

    return (
      <div className="container">
     <div className="card">
        <img src={kit.box_art} alt={kit.box_art} />
      <div className="id">
        <h1>{kit.name}</h1>
        <h2>ID #{kit.model_id}</h2>
      </div>
      <h3>{kit.series}</h3>
        
        <div className="lists">
          <div>
            <h2>prices</h2>
            <ul>
              <li>${kit.price_us}</li>
              <li>&yen;{kit.price_jp} </li>
            </ul>
          </div>
          <div>
            <h2>Specs</h2>
            <ul>
              <li>{kit.grade}</li>
              <li>{kit.scale}</li>
            </ul>
          </div>
        </div>
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