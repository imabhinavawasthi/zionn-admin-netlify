import React, { useState } from "react";
import "./userpage.css";
import * as api from "../../axios"
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Loading from "../../Components/Loading/Loading";

const UpdateDocument = () => {
    const curruser = localStorage.getItem("user");
    if (curruser === null) {
        setTimeout(() => {
            navigate("/signin");
        }, 500)
    }
    const params = useParams();
    const navigate = useNavigate();
    const [uploaded, setUploaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [doc, setDoc] = useState(null);
    const handleFileInput = (e) => {
        // setUploaded(false);
        setDoc({
            selectedFile: e.target.files[0],
            loaded: 0,
        });
        setUploaded(true);
    };
    const updateDoc = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("file", doc.selectedFile);
        formData.append("c_name", params.cname);
        formData.append("date", params.date);
        formData.append("uid", params.uid)
        let res = await api.updateDoc(formData)
        // console.log(res.data.message);
        
        navigate(`/users/user/${params.uid}`);
        setLoading(false);
    };
    return (
        <>
            {curruser ? <>
                <h3 className="mb-5 mt-3 head-user-page-css">
                    update document for share: {params.cname} <p><NavLink to={`/users/user/${params.uid}`} style={{ textDecoration: 'none' }} ><h5 style={{ color: '#000' }}><i class="bi bi-x-circle-fill"></i> cancel</h5></NavLink></p>
                </h3>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-2">
                            {loading?<Loading/>:<>{!uploaded ? <><label for="file-doc" style={{ cursor: "pointer" }} className="cell-mid cell">
                            <input
                                type="file"
                                onChange={handleFileInput}
                                id="file-doc"
                                className="input-update-doc"
                                name="file"
                                accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                required
                            />
                            upload doc<i class="bi bi-pen"></i>
                        </label></> : <button onClick={(e) => { updateDoc(e) }} className="cell-mid cell remove-btn-default">update doc<i class="bi bi-save"></i></button>
                        }</>}
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </> : <></>}

        </>

    )
}

export default UpdateDocument