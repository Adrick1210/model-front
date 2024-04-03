import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Add from './pages/Add'
import { indexLoader, kitLoader } from "./loaders";
import { createAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App />}>
       <Route path="" element={<Index />} loader={indexLoader}/>
       <Route path="kits/:id" element={<Show />} loader={kitLoader}/>
       <Route path="create" element={<Add />} action={createAction}/>
       <Route path="add" action={createAction}/>
       <Route/>
    </Route>
    </>
)) 

export default router