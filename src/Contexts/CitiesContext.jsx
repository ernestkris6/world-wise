import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext() 

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
}


function reducer(state, action){
    switch(action.type){
        case "loading":

            return {
                ...state, 
                isLoading: true
            };
           
        case 'cities/loaded': 
            
            return {
                ...state, 
                isLoading: false, 
                cities: action.payload 
            };

        case 'city/loaded': 

            return{
                ...state, 
                isLoading: false, 
                currentCity: action.payload
            };

        case 'city/created': 
            
            return {
                ...state, 
                isLoading: false, 
                cities: [...state.cities, action.payload]
            }

        case 'city/deleted':

            return {
                ...state, 
                isLoading: false, 
                cities: state.cities.filter((city)=> city.id !== action.payload)
            };

        case 'rejected':
 
            return {
                ...state, 
                isLoading: 
                false, error: action.payload 
            };


        default: throw new Error("Unknown action type")
    }
}




function CitiesProvider({ children }){    
    
    const [{cities, isLoading, currentCity}, dispatch] = useReducer(reducer, initialState)
        
    // const [cities, setCities] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [currentCity, setCurrentCity] = useState({});

    useEffect(function(){
        async function fetchCities(){
            dispatch({type :'loading'})

            try{
                // setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json();
                // setCities(data)
                dispatch({type: 'cities/loaded', payload: data })
            }
            catch{
                // alert("There was an error loading the data")
                dispatch({type: "rejected", payload: 'There was an error loading the data'})
            }
            // finally{
            //     setIsLoading(false)
            // }
            
        }

           fetchCities();
    }, []);

    
    async function getCity(id){

        dispatch({type: 'loading'})

        try{
            // setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json();
            dispatch({type: 'city/loaded', payload: data})
            // setCurrentCity(data);
        }
        catch{
            dispatch({type: "rejected", payload: 'There was an error loading the city...'})
        }
        // finally{
        //     setIsLoading(false)
        // }
        
    }

    async function createCity(newCity){

        dispatch({type: 'loading'})

        try{
            // setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    'Content-Type' : 'application/json',
                },
            })
            const data = await res.json();
            // console.log(data);
            dispatch({type: 'city/created', payload: data})
            // setCities(cities => [...cities, data]);
        }
        catch{
            dispatch({type: "rejected", payload: "There was an error creating the city..."})
            // alert("There was an error creating the city.")
        }
        // finally{
        //     setIsLoading(false)
        // }
        
    }

    async function deleteCity(id){

        dispatch({type: "loading"})
        try{
            // setIsLoading(true);
                await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE",
            })

            dispatch({type: "city/deleted", payload: id})
                      
            // setCities((cities)=> cities.filter(city => city.id !== id));
        }
        catch{
            dispatch({type: "rejected", payload: "There was an error deleting the city"})
            // alert("There was an error deleting the city.")
        }
        // finally{
        //     setIsLoading(false)
        // }
        
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


export { CitiesProvider, useCities };