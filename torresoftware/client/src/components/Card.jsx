import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";


export default function Card({name, img}){

    const personalInfo = JSON.parse(localStorage.getItem('person'));
    const strengthsArr = personalInfo?.strengths.slice(1,4)
    


    return(

        <div className={style.Card}> 
         {personalInfo?(
             <><img className={style.img} src = {personalInfo.img} alt= 'img not found' width= "180px" height='180px'/>
            <h3 className={style.name}>{personalInfo.name}</h3>
            <div className={style.info}>
            <h5>Skills and interests:</h5>
            <div className={style.skills}>
            <div className={style.contSkills}>
            {personalInfo && strengthsArr?.map(c => {
        return(
            <>
            <p key={c.name}>{c.proficiency}</p>
            <h6 key={c.skill}>{c.skill}</h6>
            </>
        )})}
            
            </div>
            </div>
            <Link to= "/detail">
            <button className={style.btn}>View All</button>
            </Link>
            <h5>Education:</h5>
            <div className={style.experience}>
          {personalInfo && personalInfo.education?.map(c => {
                return(
            <>
            <h6 key={c.name}>{c.name}</h6>
            <p key={c.organization}>{c.organization}</p>
            </>
        )})}
           
            </div>
            </div>
            <Link to= "/detail">
            <button className={style.btn}>View All</button>
            </Link>
        ):( <h2>Search the name of a Torre's user</h2></>):<h2>Search the name of a Torre's user</h2>}
        </div>
    )
}

