import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as api from "../../axios"
import InventoryRow from "../../Components/Row/InventoryRow";
import { NavLink } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  let checkadmin = false;
  const userobj = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
    setTimeout(() => {
      navigate("/signin");
    }, 1000)
  }
  else if (userobj.email === "bhanu@zionn.trade") {   //bhanu@zionn.trade
    checkadmin = true;
  }
  else {
    setTimeout(() => {
      navigate("/");
    }, 1000)
  }
  const [inventorydetails, setInventoryDetails] = useState([])

  useEffect(() => {

    async function f() {
      let res = await api.inventoryTableData()
      // console.log(res);
      setInventoryDetails(res.data.message);

      // console.log(res.data.message);
    }

    f()
  }, []);
  return (
    <div>{checkadmin && <>
      <div className='container'>
        <div className='row back-btn'>
          <strong ><NavLink style={{ textDecoration: 'none' }} to="/"><i class="bi bi-arrow-return-left"></i>back</NavLink></strong>
        </div>
        <div className='row mt-3'>
        <div className="heading-cp-css head-font">inventory</div>
          <div className="container-sm  main-con">
            <div className="row g-4">
              <div className="col-3">
                <div className="cell-wide cell purple-b">
                  <strong>company</strong>
                </div>
              </div>
              <div className="col-3">
                <div className="cell-mid cell purple-b">
                  <strong># of securities</strong>
                </div>
              </div>
              <div className="col-3">
                <div className="cell-mid cell purple-b">
                  <strong>#of unique users</strong>
                </div>
              </div>
            </div>
            {inventorydetails.map((detail) => {
              return (
                <div>
                  <InventoryRow
                    a={detail?.c_name}
                    b={detail?.no_of_shares}
                    c={detail?.count}
                  />
                </div>
              )

            })}
          </div>

        </div>
      </div>
    </>}</div>
  )
}

export default Inventory