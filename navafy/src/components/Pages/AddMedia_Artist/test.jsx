import React, { useState } from "react";
import AddMedia_Artist from "./AddMedia_Artist";

const Test=()=>{
    const [isClicked,setisClicked]=useState(false);
    return(
        <div>
            <AddMedia_Artist/>
        </div>
        
    );
}
export default Test;