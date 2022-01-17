import style from "./AnimeList.module.css";
import { Col, Row } from "react-bootstrap";
import { Anime } from "../../interfaces/interfaces";
import Card from "./../card/Card";

const AnimeList = ({animes} : {animes:[]}) => {
    return (
        <div>
            <Row>
                {
                    animes.map((item:Anime) => {
                        return(
                            <Col className="mb-3" lg = {3} key = {item.mal_id}>
                                <Card anime = {item} />
                            </Col>
                        )
                    } )
                }
            </Row>
        </div>
    )
}

export default AnimeList
