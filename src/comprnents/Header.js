import { Link } from "react-router-dom";
function Header(props) {
    return(
        <div>
            {props.user?(
                <div className="d-flex justify-content-between">
                    <div>
                        Welcome : {props.user.displayName} : 
                         <img src={props.user.photoURL} width={30} alt='user' />
                    </div>
                    <div>
                        <Link to="/" ><button className="btn btn-sm btn-danger" onClick={props.logout}>Logout</button> </Link>
                    </div>
                </div>
            ):(//else => user LclassName="d-flex justify-content-between"ogged out
                <div className="d-flex justify-content-between">
                    <div>You are not logged in.</div>   
                    <div>
                        <button onClick={props.login} className="btn btn-sm btn-success">Login</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Header; 