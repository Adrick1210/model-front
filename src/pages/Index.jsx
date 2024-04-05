 import Kit from "../components/Kit";
 import Nav from "../components/Nav";
 import { useLoaderData } from "react-router-dom";
 
 function Index() {
  const allKits = useLoaderData()
   return (
    <div className="container">
     <div className="list">
     <Nav/>
      <div className="gallery">
     
        {allKits.map((kit, i) => <Kit kit={kit} key={i}/>)}
      </div>
    </div>
    </div>
   )
}

export default Index;