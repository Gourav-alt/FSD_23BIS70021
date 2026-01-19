import{useContext} from "react";
import MyContext from "./MyContext";

function Display(){
    const {text,setText}=useContext(MyContext);
    
    return(
        <div>
            <h2>{text}</h2>
            <button onClick={()=> setText("State Updated Using Context!")}>
                Update Text
            </button>

        </div>
    );
}
export default Display;