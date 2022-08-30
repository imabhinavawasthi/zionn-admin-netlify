import React, { useEffect, useState } from "react";
import "./table.css";
import * as api from "../../axios"
import Row from "../Row/Row";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

const Tables = (props) => {


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
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

            <div className="container">
              <div className="row">
                <div className="heading-cp-css">{props.heading1}</div>
                <div className="">
                  <div className="">
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
                      <Row
                        a={userdetails[0]?.user_name}
                        b={userdetails[0]?.c_name}
                        c={userdetails[0]?.no_of_shares}
                        d={userdetails[0]?.doc_url}
                      />
                      <Row
                        a={userdetails[1]?.user_name}
                        b={userdetails[1]?.c_name}
                        c={userdetails[1]?.no_of_shares}
                        d={userdetails[1]?.doc_url}
                      />
                      <Row
                        a={userdetails[2]?.user_name}
                        b={userdetails[2]?.c_name}
                        c={userdetails[2]?.no_of_shares}
                        d={userdetails[2]?.doc_url}
                      />
                      <Row
                        a={userdetails[3]?.user_name}
                        b={userdetails[3]?.c_name}
                        c={userdetails[3]?.no_of_shares}
                        d={userdetails[3]?.doc_url}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                  <NavLink style={{ textDecoration: 'none' }} to="/users">users<i class="bi bi-arrow-up-right"></i></NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Tables;