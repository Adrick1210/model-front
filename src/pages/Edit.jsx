import { Form, Link } from "react-router-dom"

 function Edit() {
    // const kit = userLoaderData()

    // const id = kit?.url.split("/")[4]

  return (
    <div>
        <Link to="/">
            <button>Return</button>
        </Link>

        <h1>Update </h1>
        <div>
        <Form action={`/update/`} method="POST">
         <label htmlFor="model_id">
            <input type="number" name="model_id" id="model_id" />
         </label>
         <label htmlFor="name">
            <input type="text" name="name" id="name" />
         </label>
         <label htmlFor="series">
            <input type="text" name="series" id="series" />
         </label>
         <label htmlFor="us_price">
            <input type="number" name="price_us" id="price_us" />
         </label>
         <label htmlFor="jp_price">
            <input type="number" name="price_jp" id="price_jp" />
         </label>
         <label htmlFor="release_date">
            <input type="date" name="release_date" id="release_date" />
         </label>
         <label htmlFor="box_art">
            <input type="text" name="box_art" id="box_art" />
         </label>
         <label htmlFor="grade">
            <input type="text" name="grade" id="grade" />
         </label>
         <label htmlFor="scale">
            <input type="text" name="scale" id="scale" />
         </label>
         <button>Update</button>
      </Form>
      </div>
    </div>
  )
}
export default Edit;