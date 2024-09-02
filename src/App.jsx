import { BrowserRouter,Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Pricing from "./Pages/Pricing"
import Product from "./Pages/Product"
import PageNotFound from "./Pages/PageNotFound"
import AppLayout from "./Components/AppLayout"
import Login from "./Pages/Login"
import CityList from "./Components/CityList"
import { useEffect, useState } from "react"



export default function App() {

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:8000"


  useEffect(function(){
    async function fetchCities(){
      try{
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data);
      }
      catch{
        alert("There was an error loading the data...")
      }
      finally{
        setIsLoading(false)
      }
      
    }

    fetchCities();
  },[])
  


    
  return (
   
    <div>

      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="/app" element={<AppLayout/>} >
          <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
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
