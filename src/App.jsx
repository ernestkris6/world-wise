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
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/app" element={<AppLayout/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
    
    
  )
}
