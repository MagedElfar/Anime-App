import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./Search.module.css";

const Search = ({onChange , term} : {onChange:any , term:string}) => {
    const handelTerm = (e:any) => {
        onChange(e.target.value)
    }

    return (
        <div className={`${style.bar} my-5 d-flex justify-content-between align-items-center`}>
            <div className={style.search}>
                <input value={term} type = "text" onChange={(e) => handelTerm(e)} className={style.input}  />
                <label>search</label>
            </div>
            <div className={`${style.icon} d-flex justify-content-end`}>
                <FontAwesomeIcon icon= {faSearch} />
            </div>
        </div>
    )
}

export default Search
