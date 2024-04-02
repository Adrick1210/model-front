 import Kit from "../components/Kit";
 import { useLoaderData } from "react-router-dom";
 
 function Index() {
  const allKits = useLoaderData()
   return (
    <>
      {allKits.map((kit, i) => <Kit kit={kit} key={i}/>)}
    </>
   )
}

export default Index;