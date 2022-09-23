import React from 'react'
import Button from '../../Components/Button/Button'
import "./transaction.css"

const Transaction = (props) => {
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
                                <div className="row g-5">
                                    <div className="col-3">
                                        <input className="cell-wide cell " type="text" />
                                    </div>
                                    <div className="col-3">
                                        <input className="cell-mid cell" type="text" />
                                    </div>
                                    <div className="col-3">
                                        <input className="cell-mid cell" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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
                                <div className="row mb-3 g-5">
                                    <div className="col-3">
                                        <input className="cell-wide cell " type="text" />
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
                                <div className="row mb-3 g-5">
                                    <div className="col-3">
                                        <input className="cell-wide cell " type="text" />
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
                                <div className="row mb-3 g-5">
                                    <div className="col-3">
                                        <input className="cell-wide cell " type="text" />
                                    </div>
                                    <div className="col-3">
                                        <input defaultValue={5} className="cell-mid cell" type="text" />
                                    </div>
                                    <div className="col-3">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-1'></div>
                                                <div className='col-10'>
                                                    <Button name="select buyer" />
                                                </div>
                                                <div className='col-1'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3 g-5">
                                    <div className="col-3">
                                        <input className="cell-wide cell " type="text" />
                                    </div>
                                    <div className="col-3">
                                        <input defaultValue={5} className="cell-mid cell" type="text" />
                                    </div>
                                    <div className="col-3">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-1'></div>
                                                <div className='col-10'>
                                                    <Button name="select buyer" />
                                                </div>
                                                <div className='col-1'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction