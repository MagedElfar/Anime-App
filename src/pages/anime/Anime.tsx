import { useEffect, useState } from "react"
import { Anime as AnimeInteface} from "../../interfaces/interfaces";
import { useParams , useNavigate } from "react-router-dom";
import { getAnime } from "../../api/api";
import { Container, Row , Col } from "react-bootstrap";
import style from "./Anime.module.css";

const Anime = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [anime , setAnime] = useState<AnimeInteface | null>(null)
    
    useEffect(() => {
        const fechAnime = async (id: any) => {
            try {
                const {data} = await getAnime(id);
                console.log(data)
                setAnime(data)
            } catch (error) {
                console.log(error)
            }
        }

        fechAnime(id);
    } , [])

    if(!anime) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const {image_url , synopsis , score , scored_by , rank , popularity , members} = anime;

    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg = {3}>
                        <div className={style.img}>
                            <img src = {image_url} />
                        </div>
                    </Col>
                    <Col lg = {9}>
                        <div className={style.synopsis}>
                            <h4>synopsis</h4>
                            <p>{synopsis}</p>
                        </div>
                        <div className="d-flex align-items-center mt-5">
                            <div className={`${style.info} alert alert-primary justify-content-between align-items-center`}>
                                <div className={`${style.boldnum} fw-bold`}>#{score}</div>
                                <div className={`${style.smallnum} text-capitalize`}>{scored_by} users</div>
                            </div>
                            <div className={`${style.info} alert alert-danger justify-content-between align-items-center`}>
                                <div className={`${style.boldnum} fw-bold`}>#{rank}</div>
                                <div className={`${style.smallnum} text-capitalize`}>ranked</div>
                            </div>
                            <div className={`${style.info} alert alert-warning justify-content-between align-items-center`}>
                                <div className={`${style.boldnum} fw-bold`}>#{popularity}</div>
                                <div className={`${style.smallnum} text-capitalize`}>popularity</div>
                            </div>
                            <div className={`${style.info} alert alert-success justify-content-between align-items-center`}>
                                <div className={`${style.boldnum} fw-bold`}>{members}</div>
                                <div className={`${style.smallnum} text-capitalize`}>members</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div>
                    <button onClick={() => navigate(-1)} type="button" className=" mt-5 btn btn-primary">Back</button>
                </div>
            </Container>
        </div>
    )
}

export default Anime
