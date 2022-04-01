import React from 'react';
import styles from './Header.module.css'; 
import SearchBar from "./SearchBar";
import torreco from "../assets/torreco.png";



export default function Header() {



  return (
    <div className={styles.header}>
      <div className={styles.content}>
                <img src={torreco} alt="logo torre" height="50px" width="150px"/>
      <SearchBar/>
          </div>
    </div>
  );
}
