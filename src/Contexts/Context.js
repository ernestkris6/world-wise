import { createContext, useState } from 'react';

const cityContext = createContext() 


function CityContext(){

    useState()


    function useCity(){
        const context = cityContext(CityContext)
        if(context === undefined) throw new Error("City Context has been called in a wrong component")
            else return context;
    }
}


export default {CityContext, useCity};