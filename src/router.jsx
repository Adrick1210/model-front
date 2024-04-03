import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Add from './pages/Add'
import Edit from "./pages/Edit";
import { indexLoader, kitLoader } from "./loaders";
import { createAction, deleteAction, updateAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App />}>
       <Route path="" element={<Index />} loader={indexLoader}/>
       <Route path="kits/:id" element={<Show />} loader={kitLoader}/>
       <Route path="create" element={<Add />} />
       <Route path="add" action={createAction}/>
       <Route path="edit/:id" element={<Edit/>} loader={kitLoader}/>
       <Route path="update/:id" action={updateAction}/>
       <Route path="delete/:id" action={deleteAction}/>
    </Route>
    </>
)) 

export default router