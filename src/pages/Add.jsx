import { Form, Link } from "react-router-dom"
import Nav from "../components/Nav";

 function Add() {
  return (
    <div className="input">
      <Nav />
        <Link to="/">
            <button className="return">Return</button>
        </Link>

        <div className="form">
        <h1 className="add-head">Add a Model</h1>
        <Form action="/add" method="POST">
         <label htmlFor="model_id">
            <input type="number" name="model_id" id="model_id" placeholder="Model ID"/>
         </label>
         <label htmlFor="name">
            <input type="text" name="name" id="name" placeholder="Name"/>
         </label>
         <label htmlFor="series">
            <input type="text" name="series" id="series" placeholder="Series"/>
         </label>
         <label htmlFor="us_price">
            <input type="number" name="price_us" id="price_us" placeholder="US Price"/>
         </label>
         <label htmlFor="jp_price">
            <input type="number" name="price_jp" id="price_jp" placeholder="Japan Price"/>
         </label>
         <label htmlFor="release_date">
            <input type="date" name="release_date" id="release_date" placeholder="Release Date"/>
         </label>
         <label htmlFor="box_art">
            <input type="text" name="box_art" id="box_art" placeholder="Box Art URL"/>
         </label>
         <label htmlFor="grade">
            <input type="text" name="grade" id="grade" placeholder="Grade"/>
         </label>
         <label htmlFor="scale">
            <input type="text" name="scale" id="scale" placeholder="Scale"/>
         </label>
         <button>Add</button>
      </Form>
      </div>
    </div>
  )
}
export default Add;