import { Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import { Anime } from "../../interfaces/interfaces"
import style from "./Card.module.css"

const Card = ({anime} : {anime:Anime}) => {
    const {mal_id , title , image_url} = anime;
    return (
        <div className={style.card}>
            <Link to = {`/${mal_id}`} className="text-decoration-none">
                <div className= {style.card}>
                    <div className={style.img}>
                        <img src = {image_url} />
                    </div>
                    <div className={`${style.title} d-flex align-items-center justify-content-center`}>
                        <h6 className="text-center mb-0">{title}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
