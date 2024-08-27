import { BrowserRouter,Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Pricing from "./Pages/Pricing"
import Product from "./Pages/Product"
import PageNotFound from "./Pages/PageNotFound"
import AppLayout from "./Components/AppLayout"



export default function App() {

    
  return (
   
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/app" element={<AppLayout/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
    
  )
}
