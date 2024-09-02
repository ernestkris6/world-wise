import { BrowserRouter,Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Pricing from "./Pages/Pricing"
import Product from "./Pages/Product"
import PageNotFound from "./Pages/PageNotFound"
import AppLayout from "./Components/AppLayout"
import Login from "./Pages/Login"



export default function App() {

    
  return (
   
    <div>

      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="/app" element={<AppLayout/>} >
          <Route index element={<p>List of Cities</p>} />
          <Route path="cities" element={<p>List of Cities</p>} />
          <Route path="countries" element={<p>List of Countries</p>} />
          <Route path="form" element={<p>List of form</p>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
    
    
  )
}
