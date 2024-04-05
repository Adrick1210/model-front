import Kit from "../components/Kit";
import Nav from "../components/Nav";
import { useLoaderData } from "react-router-dom";

function Master() {
 const allKits = useLoaderData()
 const grade = 'Master Grade (MG)'

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

export default Master;