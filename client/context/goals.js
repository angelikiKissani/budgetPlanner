import React ,{useState,createContext } from "react";

const GoalContext = createContext();

const GoalProvider = ({children})=>{
    const [goals,setGoals]=useState([]);

    return(
        <GoalContext.Provider value={[goals,setGoals]}>
            {children}
        </GoalContext.Provider>
    )
}
export {GoalContext,GoalProvider};