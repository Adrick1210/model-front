import Kit from "../components/Kit";
import Nav from "../components/Nav";
import { useLoaderData } from "react-router-dom";

function Real() {
 const allKits = useLoaderData()

  return (
   <div className="container">
    <div className="list">
      <Nav />
     <div className="gallery">
    {allKits
        .filter(kit => kit.model_id === 0 && kit.scale !== '1/100')
        .map((filteredKit, i) => (
        <Kit kit={filteredKit} grade={filteredKit.grade} key={i}/>))}
     </div>
   </div>
   </div>
  )
}

export default Real;