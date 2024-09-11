import { createContext } from 'react';

const cityContext = createContext() 


function CityContext(){

    

    function useCity(){
        const context = cityContext(CityContext)
        if(context === undefined) throw new Error("City Context has been called in a wrong component")
            else return context;
    }
}


export default {CityContext, useCity};