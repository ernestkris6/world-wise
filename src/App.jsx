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
import { CitiesProvider } from "./Contexts/CitiesContext";


export default function App() {

    
  return (
   
    <div>
      <CitiesProvider>
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
            element={<CityList />} />

            <Route path="cities/:id" element={<City />} />
            <Route 
            path="countries" 
            element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
        
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  </CitiesProvider>
    </div>
    
    
  )
}
