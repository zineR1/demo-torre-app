import React from "react";
import {Link} from "react-router-dom";
import style from './Detail.module.css'
import backicon from "../back.png";

export default function Detail(props){
    
    const personalInfo = JSON.parse(localStorage.getItem('person'));     

    return(
        <div className={style.main1}>
            
                <div className={style.detailgral}>
            <Link to= '/'>
                <button className={style.detailboton}><img src={backicon} alt="goback" height="20px" width="20px"/></button>
            </Link>
            <div className={style.container}>
            <div className={style.detailinfo}>
            <div className={style.info}>
            <h5>Skills and interests:</h5>
            <div className={style.skills}>
            <div className={style.contSkills}>
            {personalInfo.strengths?.map(c => {
        return(
            <>
            <p>{c.proficiency}</p>
            <h6>{c.skill}</h6>
            </>
        )})}
            
            </div>
            </div>
            <h5>Education:</h5>
            <div className={style.experience}>
          {personalInfo.education?.map(c => {
                return(
            <>
            <h6>{c.name}</h6>
            <p>{c.organization}</p>
            </>
        )})}
           
            </div>
            <h5>Projects:</h5>
            <div className={style.experience}>
          {personalInfo.projects?.map(c => {
                return(
            <>
            <h6>{c.name}</h6>
            <p>{c.organization}</p>
            <p>{c.startTime}</p>
            </>
        )})}
           
            </div>
            </div>
              </div>

        </div>
        <br/>
            </div>
                )
                
            </div>
            
            
    )
}