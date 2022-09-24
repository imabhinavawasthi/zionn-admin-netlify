import React from 'react'
import { useState } from 'react'
import Button from '../../Components/Button/Button'
import "./transaction.css"
import * as api from "../../axios"
import Loading from "../../Components/Loading/Loading"

const Transaction = (props) => {
    const [issuerName, setIssuerName] = useState("");
    const [issuerDetails, setIssuerDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const getIssuerDetails = async (e) => {
        setLoading(true);
        e.preventDefault();
        setIssuerName(e.target.value);
        let res = await api.getIssuerDetails({ c_name: e.target.value.trim() });
        setIssuerDetails(res.data.result);
        setLoading(false);
    }
    return (
        <div>
            <div className='container p-5'>
                <div className='row mb-3 d-flex justify-content-center align-items-center' >
                    <h3 className='pp-chirka head-transac-css'>Generate transaction</h3>
                </div>
                <div className='row'>
                    <div className="container">
                        <div className="row">
                            <div className="container-sm  main-con">
                                <div className="row mb-3 g-5">
                                    <div className="col-3">
                                        <div className="cell-wide cell purple-b">
                                            <strong>Issuer</strong>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="cell-mid cell purple-b">
                                            <strong># of securities</strong>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="cell-mid cell purple-b">
                                            <strong>Price per share</strong>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={getIssuerDetails} >
                                    <div className="row g-5">
                                        <div className="col-3">
                                            <input placeholder='issuer name' onChange={(e) => { getIssuerDetails(e);  }} className="cell-wide cell " type="text" required />
                                        </div>
                                        <div className="col-3">
                                            <input placeholder='# of securities' className="cell-mid cell" type="number" />
                                        </div>
                                        <div className="col-3">
                                            <input placeholder='price per share' className="cell-mid cell" type="number" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                {loading && <Loading />}
                {(issuerDetails[0]) ? <div>
                    <div className='row mb-3 d-flex justify-content-center align-items-center' >
                        <h3 className='pp-chirka head-transac-css'>Finalize parties</h3>
                    </div>
                    <div className='row'>
                        <div className="container">
                            <div className="row">
                                <div className="container-sm  main-con">
                                    <div className="row mb-3 g-5">
                                        <div className="col-3">
                                            <div className="cell-wide cell purple-b">
                                                <strong>seller</strong>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="cell-mid cell purple-b">
                                                <strong>commission %</strong>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="cell-mid cell purple-b">
                                                <strong>activate dashboard</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                    {issuerDetails.filter(detail => detail.trans_type.includes('sell')).map(detail => (
                                        <div className="row mb-3 g-5">
                                            <div className="col-3">
                                                <div className="cell-mid cell">
                                                    {detail.user_name}
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <input defaultValue={5} className="cell-mid cell" type="text" />
                                               
                                            </div>
                                            <div className="col-3">
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='col-1'></div>
                                                        <div className='col-10'>
                                                            <Button name="select seller" />
                                                        </div>
                                                        <div className='col-1'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className="container">
                            <div className="row">
                                <div className="container-sm  main-con">
                                    <div className="row mb-3 g-5">
                                        <div className="col-3">
                                            <div className="cell-wide cell purple-b">
                                                <strong>buyer</strong>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="cell-mid cell purple-b">
                                                <strong>commission %</strong>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="cell-mid cell purple-b">
                                                <strong>activate dashboard</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {issuerDetails.filter(detail => detail.trans_type.includes('buy')).map(detail => (
                                        <div className="row mb-3 g-5">
                                            <div className="col-3">
                                                <div className="cell-mid cell">
                                                    {detail.user_name}
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <input defaultValue={5} className="cell-mid cell" type="text" />
                                                
                                            </div>
                                            <div className="col-3">
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='col-1'></div>
                                                        <div className='col-10'>
                                                            <Button name="select seller" />
                                                        </div>
                                                        <div className='col-1'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>
                    </div>
                </div> :
                    <>
                        {issuerName&&!loading && <div class="alert alert-danger" role="alert">
                            no results for <strong>{issuerName}</strong>
                        </div>}
                    </>
                }
                {/* {!issuerName && <><div class="alert alert-warning" role="alert">
                    enter issuer name
                </div></>} */}
            </div>

        </div>
    )
}

export default Transaction