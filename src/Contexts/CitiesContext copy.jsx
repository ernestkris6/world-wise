/* import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext() 


function CitiesProvider({ children }){
    

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(function(){
        async function fetchCities(){
            try{
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json();
                setCities(data)
            }
            catch{
                alert("There was an error loading the data")
            }
            finally{
                setIsLoading(false)
            }
            
        }

           fetchCities();
    }, []);

    
    async function getCity(id){
        try{
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json();
            setCurrentCity(data);
        }
        catch{
            alert("There was an error loading the data")
        }
        finally{
            setIsLoading(false)
        }
        
    }

    async function createCity(newCity){
        try{
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    'Content-Type' : 'application/json',
                },
            })
            const data = await res.json();
            // console.log(data);
            
            setCities(cities => [...cities, data]);
        }
        catch{
            alert("There was an error creating the city.")
        }
        finally{
            setIsLoading(false)
        }
        
    }

    async function deleteCity(id){
        try{
            setIsLoading(true);
                await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE",
            })
                      
            setCities((cities)=> cities.filter(city => city.id !== id));
        }
        catch{
            alert("There was an error deleting the city.")
        }
        finally{
            setIsLoading(false)
        }
        
    }


        const value = {
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deleteCity,
        }
    
   

    return <CitiesContext.Provider 
            value={value}>
            {children}
            </CitiesContext.Provider>
            

}

function useCities(){
   const context = useContext(CitiesContext)
    if(context === undefined) throw new Error("Context has been called outside the Cities Provider")
        return context
   
}


export { CitiesProvider, useCities }; */