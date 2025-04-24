import j1 from '../css/pic/j1.gif';
function Info(props){
    return(
        <div className=" text-center ">
            {props.user?(//logged in
                <div>
                    <h3 className="bg-primary text-white text-center">Welcome {props.user.displayName}</h3>
                    <div style={{ border: 'solid 1px yellow',}}>
                    <img src={props.user.photoURL} alt="user" />

                   <h4 className=' my-2 py-2'>Welcome {props.user.displayName} to our web Database</h4>
                    <div class="btn btn-sm text-center"><a class="btn btn-sm btn-outline-warning"href="/Home">Go To Database</a></div>
                    </div>
                </div>
            ):(//Not logged in
                <div>
                    <img src={j1}/>
                    <h3 className="text-danger text-center mt-5 pt-5">You are not logged in. Please login firest!!!</h3>
                </div>
            )}
        </div>
    );
}
export default Info;