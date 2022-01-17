import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getAllAnimes } from "../api/api";
import AnimeList from "../components/anime-list/AnimeList";
import SearchBar from "../components/search/Search";
import Pagination from "./../components/pagination/Pagination";
import { useLocation } from "react-router-dom";

const Search = () => {
    const[resulte , setResulte] = useState(null);
    const[pages , setPages] = useState(0)
    const [term , setTerm] = useState<string>("naruto");
    const [loading , setLoading] = useState(false);
    const location = useLocation()

    const updateTerm = (term:any) => {
        setTerm(term)
    }

    const pageNum = location.search.split("=")[1];

    const search = async (term:string , setLoading:any) => {
        try {
            const {data : {results , last_page}} = await getAllAnimes(term , +pageNum);
            setResulte(results);
            setPages(last_page);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        if (!resulte) {
            setLoading(true)
            search(term , setLoading)
        } else {
            setLoading(true)
            const debounce = setTimeout(() => search(term , setLoading) , 1000 );
            return () => {
                clearTimeout(debounce)
            }
        }
    } , [term , location])

    return (
        <div>
            <Container>
                <SearchBar term = {term} onChange = {updateTerm}  />
                {resulte ? 
                    <>
                        {!loading ?
                        <AnimeList animes = {resulte} />
                        :
                        <div className="loading-part d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        }
                        <Pagination count = {pages} />
                    </> 
                :null}
            </Container>
        </div>
    )
}

export default Search
