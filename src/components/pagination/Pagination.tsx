import { Link , useLocation } from 'react-router-dom';

const Pagination = ({count }: {count:number}) => {
    const {pathname , search} = useLocation();

    const page = +search.split("=")[1];

    if(!search){
        return(
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}?page=${1}`}>{1}</Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}?page=${2}`}>{2}</Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}?page=${2}`}>Next</Link>
                    </li>
                </ul> 
            </nav>
        )
    }

    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {page > 1 ?
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}?page=${page-1}`}>Previous</Link>
                    </li> 
                : null}
                {page !== 1 ? 
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}?page=${page-1}`}>{page-1}</Link>
                    </li>
                : null}
                <li className="page-item">
                    <Link className="page-link" to={`${pathname}?page=${page}`}>{page}</Link>
                </li>
                {page  < count ? 
                    <li className="page-item">
                        <Link className="page-link" to={`${pathname}?page=${page+1}`}>{page+1}</Link>
                    </li>
                : null}
                {page < count || !page ? <li className="page-item"><Link className="page-link" to={`${pathname}?page=${page+1}`}>Next</Link></li> : null}
            </ul> 
        </nav>
    )
}

export default Pagination;