import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Pricing from "./Pages/Pricing"
import Product from "./Pages/Product"

export default function App() {

    
  return (
   
    <div>
       <h4>Hello Routes!</h4>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />}/>
        <Route path="pricing" element={<Pricing />}/>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  )
}
