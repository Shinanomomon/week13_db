import { useLocation ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase_config";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import '../css/home.css';

function Edit(){
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state;

    const [name, setName] = useState('');
    const [sect, setSect] = useState('');
    const [tel, setTel] = useState('');
    const ref = collection(db,'/stdphones');
    const targetDoc = doc(ref,id);

    useEffect(function(){
        getDoc(targetDoc)
        .then(function(doc){
            let phone = doc.data();
            setName(phone.name);
            setSect(phone.sect);
            setTel(phone.tel);  
        })
        .catch(err=>alert(err));
    }, []);

    const editPhone = () =>{
        const doc = {name: name, sect:sect,tel:tel};
        updateDoc(targetDoc,doc)
        .then(()=>navigate('/'))
        .catch(err=>alert(err));
    }

    return(
        <div>
            <h1 className="bg-primary text-center text-white">Edit</h1>
            <div className="text-center">
                <div>
                Name: <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
                </div><br/>
                <div>
                Sect: <input type="radio" name='rdSect' value="CED" 
                            checked={sect==="CED"?'checked':''}
                            onChange={(event)=>setSect(event.target.value)}/> CED
                      <input type="radio" name='rdSect' value="TCT" 
                            checked={sect==="TCT"?'checked':''}
                            onChange={(event)=>setSect(event.target.value)}/> TCT
                </div><br/>
                <div>

                Tel: <input type="tel" value={tel} onChange={(event)=>setTel(event.target.value)} />
                </div><br/>
                <div>
                <button onClick={()=>navigate(-1)} className="btn btn-sm btn-outline-danger">Cancel</button>
                <button onClick={editPhone} className="btn btn-sm btn-outline-success">Edit Phone</button>
                </div>
            </div>
        </div>
    )
}
export default Edit;