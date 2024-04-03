import { Form, Link, useLoaderData } from "react-router-dom"

 function Edit() {
    const kit = useLoaderData()

    const id = kit?.url.split("/")[4]

  return (
    <div className="container">
        <Link to="/">
            <button>Return</button>
        </Link>

        <h1>Update {kit.name}</h1>
        <div className="form">
        <Form action={`/update/${id}/`} method="POST">
         <label htmlFor="model_id">
            <input type="number" name="model_id" id="model_id" defaultValue={kit.model_id}/>
         </label>
         <label htmlFor="name">
            <input type="text" name="name" id="name" defaultValue={kit.name}/>
         </label>
         <label htmlFor="series">
            <input type="text" name="series" id="series" defaultValue={kit.series}/>
         </label>
         <label htmlFor="us_price">
            <input type="number" name="price_us" id="price_us" defaultValue={kit.price_us}/>
         </label>
         <label htmlFor="jp_price">
            <input type="number" name="price_jp" id="price_jp" defaultValue={kit.price_jp}/>
         </label>
         <label htmlFor="release_date">
            <input type="date" name="release_date" id="release_date" defaultValue={kit.release_date}/>
         </label>
         <label htmlFor="box_art">
            <input type="text" name="box_art" id="box_art" defaultValue={kit.box_art}/>
         </label>
         <label htmlFor="grade">
            <input type="text" name="grade" id="grade" defaultValue={kit.grade}/>
         </label>
         <label htmlFor="scale">
            <input type="text" name="scale" id="scale" defaultValue={kit.scale}/>
         </label>
         <button>Update</button>
      </Form>
      </div>
    </div>
  )
}
export default Edit;