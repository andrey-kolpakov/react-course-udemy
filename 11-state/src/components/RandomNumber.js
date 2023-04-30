import { useState } from "react";
import generateRandomNum from "./utils/generateRandomNum";


function RandomNumber(props) {    
    const [randomNum, setRandomNum] = useState(generateRandomNum(props))
    

    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(props))
    }
   

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    );
}

export default RandomNumber;
