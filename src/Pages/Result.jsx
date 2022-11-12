import React, {useEffect, useState} from "react";

const Result = ({res})=>{
    const [count ,  setCount] = useState(0)

    useEffect(()=>{
        let response = 0
        for(let i =0; i < res.length; i++){
            if(res[i]){
                response +=1
                setCount(response)
            }
    
        }
    }, [])
    
    return(
        <>
        <h1>your score is</h1>
        <br />
        <p>{count}/{res.length}</p>
    </>
    )
}
export default Result