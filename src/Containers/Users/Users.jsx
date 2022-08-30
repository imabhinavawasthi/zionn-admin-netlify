import React, { useEffect, useState } from "react";
import * as api from "../../axios"
import Row from "../../Components/Row/Row";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import './users.css'
import { useNavigate } from "react-router";


const Users = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  let checkadmin = false;
  const userobj = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
    setTimeout(() => {
      navigate("/signin");
    }, 1000)
  }
  else if (userobj.email === "awasthiabhinav744@gmail.com") {   //bhanu@zionn.trade
    checkadmin = true;
  }
  else {
    setTimeout(() => {
      navigate("/");
    }, 1000)
  }
  const [userdetails, setUserDetails] = useState([])

  useEffect(() => {

    async function f() {
      let res = await api.userTableData()

      setUserDetails(res.data.result);

      // console.log(res.data.result);
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
        <div className="heading-cp-css head-font">users</div>
          <div className="container-sm  main-con">
            <div className="row g-4">
              <div className="col-2">
                <div className="cell-wide cell purple-b">
                  <strong>customer</strong>
                </div>
              </div>
              <div className="col-2">
                <div className="cell-mid cell purple-b">
                  <strong>company</strong>
                </div>
              </div>
              <div className="col-2">
                <div className="cell-mid cell purple-b">
                  <strong>inventory</strong>
                </div>
              </div>
              <div className="col-2">
                <div className="cell-mid cell purple-b">
                  <strong>ownership</strong>
                </div>
              </div>
            </div>
            {userdetails.map((detail) => {
              return (
                <div>
                  <Row
                    a={detail?.user_name}
                    b={detail?.c_name}
                    c={detail?.no_of_shares}
                    d={detail?.doc_url}
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

export default Users