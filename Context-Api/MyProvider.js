import { useState } from "react";
import MyContext from "./MyContext";
function MyProvider({children}){
    const[text,setText]=useState("Hello from Context API");

    return(
        <MyContext.Provider value={{text,setText}}>
            {children}
        </MyContext.Provider>
    );
}
export default MyProvider;