import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Add from './pages/Add'
import Edit from "./pages/Edit";
import High from "./pages/High";
import Master from "./pages/Master";
import Real from "./pages/Real";
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
       <Route path="/high-grade" element={<High/>} loader={indexLoader}/>
       <Route path="/master-grade" element={<Master/>} loader={indexLoader}/>
       <Route path="/real-grade" element={<Real/>} loader={indexLoader}/>
    </Route>
    </>
)) 

export default router