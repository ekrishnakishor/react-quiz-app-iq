import React, {useEffect, useState} from "react";
import "../Styles/Style.css";
import "../Styles/Result.css";
import { Link } from "react-router-dom";


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

    let iq = (count*10)*2;
    
    return(
        <>
        <div className="resu">
        <menu>
        <div class="nav-div-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3899/3899588.png"
              alt="menu-icon"
            />
            <h4>testometrica</h4>
          </div>
          <div class="nav-div-right">
            <input type="text" placeholder="Search among 332 tests" />
            <Link to={"/"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="nav-user"
            /></Link>
            </div>
    </menu>
        <div className="val">
        <h1>your score is</h1>
        <br />
        <p>{count}/{res.length}</p>
        <p><b>Your IQ</b> is {iq} this corresponds to an average level IQ. In this test you have {count} <b>correct answers from 5</b></p>
        </div>
        </div>
    </>
    )
}
export default Result