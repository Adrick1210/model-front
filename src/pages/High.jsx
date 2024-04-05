import Kit from "../components/Kit";
import Nav from "../components/Nav";
import { useLoaderData } from "react-router-dom";

function High() {
 const allKits = useLoaderData()
 const grade = 'High Grade (HG)'

  return (
   <div className="container">
    <div className="list">
      <Nav />
     <div className="gallery">
    {allKits
        .filter(kit => kit.grade === grade)
        .map((filteredKit, i) => (
        <Kit kit={filteredKit} grade={filteredKit.grade} key={i}/>))}
     </div>
   </div>
   </div>
  )
}

export default High;