import React from 'react'
import Button from '../Button/Button'
import "./transactiontable.css"

const TransactionTable = (props) => {
  return (
    <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

            <div className="container">
              <div className="row">
                <div className="heading-cp-css">{props.heading1}</div>
                <div className="">
                  <div className="">
                    
                  </div>
                  <div className="mb-5 mt-5 d-flex justify-content-center">
                  <Button name="add transaction" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          '<div className="col-1"></div>
        </div>
      </div>
  )
}

export default TransactionTable