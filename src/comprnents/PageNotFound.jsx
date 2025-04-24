import { Link } from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css';

const PageNotFound =()=> {
    return(
        <div>
            <h2 style={{backgroundColor:"#FF6300",color:"#80010D", fontSize:'100px',textAlign:'center'}}>Page not found</h2>
            <Link to="/"><button className='rounded-5 mx-auto d-block'>Back to Home</button></Link>
        </div>
    )
}
export default PageNotFound;
