 import Kit from "../components/Kit";
 import { useLoaderData, Link } from "react-router-dom";
 
 function Index() {
  const allKits = useLoaderData()
   return (
    <div>
     <Link to="/create">
     <button>Add +</button>
     </Link>
    <div>
      {allKits.map((kit, i) => <Kit kit={kit} key={i}/>)}
    </div>
    </div>
   )
}

export default Index;