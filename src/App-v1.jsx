import { useEffect, useState } from "react"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Pricing from "./Pages/Pricing"
import Product from "./Pages/Product"
import PageNotFound from "./Pages/PageNotFound"
import AppLayout from "./Components/AppLayout"
import Login from "./Pages/Login"
import CityList from "./Components/CityList"
import CountryList from "./Components/CountryList"
import City from "./Components/City"
import Form from "./Components/Form"


const BASE_URL = "http://localhost:8000";

export default function App() {

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true)
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
          <Route 
          index 
          element={<Navigate replace to="cities" />} 
          />

          <Route 
          path="cities" 
          element={<CityList cities={cities} 
          isLoading={isLoading} />} />

          <Route path="cities/:id" element={<City />} />
          <Route 
          path="countries" 
          element={<CountryList cities={cities} 
          isLoading={isLoading}/>} />
          <Route path="form" element={<Form />} />
        </Route>
       
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
    
    
  )
}
