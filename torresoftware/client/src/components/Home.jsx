import React from "react";
import {Link} from 'react-router-dom';
import Card from './Card';
import Header from './Header';
import style from "./Home.module.css";
import remote from "../assets/remote.jpg";
import BigSearchBar from "./BigSearchBar";





export default function Home(){


return (
    <div className={style.principal}>
        <div>
        <Header/>
        </div>
        <img src={remote} alt="remote work" height="470px" width="100%"/>
        <div>
            <BigSearchBar/>
        </div>
<div> 
    
      <Card className={style.grid}/>
      </div>
       
    </div> 
 )
}
