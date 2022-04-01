import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../actions";
import styles from "./BigSearchBar.module.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a name to start the search");
    } else {
      dispatch(getDetail(name));
      setName("");
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={name}
        className={styles.input}
        placeholder="Search people..."
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={styles.go}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <BsSearch />
      </button>
    </div>
  );
}
