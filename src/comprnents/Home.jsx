import { db } from "../firebase_config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/home.css';

function Home() {
    const stdPhoneRef = collection(db, '/stdphones');
    const [stdphones, setStdPhones] = useState();
    const [name, setName] = useState('');
    const [sect, setSect] = useState('');
    const [tel, setTel] = useState('');

    useEffect(() => {
        getAllPhones();
    }, []);

    function getAllPhones() {
        getDocs(stdPhoneRef)
            .then(function (phones) { //callback function
                let allPhones = [];
                phones.docs.map(phone => {
                    return allPhones = [...allPhones, { id: phone.id, ...phone.data() }];
                });

                setStdPhones(allPhones);
                //console.log(phones.doc);

            })
            .catch(err => alert(err)); //callback function
    }
    //Add Phone
    function addPhone() {
        const phone = { name: name, sect: sect, tel: tel };
        addDoc(stdPhoneRef, phone)
            .then(() => {
                //clear form
                setName('');
                setSect('');
                setTel('');
                getAllPhones();
            })
            .catch(err => alert(err));
    }

    //Delete Phone
    function delPhone(id) {
        if (!window.confirm("Do you really want to delete this?")) {
            return;
        }
        const targetDoc = doc(stdPhoneRef, id);
        deleteDoc(targetDoc)
            .then(function () {
                getAllPhones();
            })
            .catch(err => alert(err));
    }

    return (
        <div>
            <h1 className="bg-primary text-center text-white">HOME</h1>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                    Name: <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div class="col-sm-3">
                    Sect: <input type="radio" name='rdSect' value="CED"
                    checked={sect === "CED" ? 'checked' : ''}
                    onChange={(event) => setSect(event.target.value)} /> CED 
                    <input type="radio" name='rdSect' value="TCT"
                    checked={sect === "TCT" ? 'checked' : ''}
                    onChange={(event) => setSect(event.target.value)} /> TCT
                    </div>
                    <div class="col-sm-4">
                    Tel: <input type="tel" value={tel} onChange={(event) => setTel(event.target.value)} />
                    </div>
                    <div class="col-sm-1">
                <button onClick={addPhone} className="btn btn-sm btn-outline-success ">Add Phone</button>
                    </div>
                    
                </div>
            </div>
            <div>
                {stdphones ? (
                    stdphones.map((phone) => {
                        return (
                            <div key={phone.id} className="d-flex justify-content-between my-3 ">
                                <div id="pdata">
                                    Name: {phone.name}<br />
                                    sect: {phone.sect}<br />
                                    tel: {phone.tel}<br />
                                </div>
                                <div>
                                    <Link to='/edit' state={phone.id}>
                                        <button className="btn btn-sm btn-outline-warning">Edit</button>
                                    </Link> 
                                    <button onClick={() => delPhone(phone.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div><h3>No Student Phone</h3></div>
                )

                }
            </div>
        </div>
    )
}
export default Home;