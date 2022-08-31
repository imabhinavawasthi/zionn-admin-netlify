import React, { useEffect, useState } from "react";
import "./userpage.css";
import * as api from "../../axios"
import { NavLink, useParams } from "react-router-dom";
import RowUserPage from "./RowUserPage.jsx"
import RowOnboarding from "./RowOnboarding.jsx"


const UserPage = () => {
  const params = useParams();
  const [userdetails, setUserDetails] = useState([])
  const userobj = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {

    async function f() {
      let res = await api.userPageDetails(userobj.email, params.uid);

      setUserDetails(res.data.result);

      console.log(res.data);
    }

    f()
  }, []);
  return (
    <div className='container p-2'>
    <h1 className="mb-5 mt-3 head-user-page-css">
      User Details <NavLink to=""><h5 style={{ color: '#000' }}><i class="bi bi-pen-fill"></i>edit</h5></NavLink>
    </h1>
      <div className="heading-cp-css head-font">onboarding</div>
      <div className="container-sm  main-con mb-5">
        <RowOnboarding
          a="name"
          b={userdetails[0]?.user_name}
        />
        <RowOnboarding
          a="email"
          b={userdetails[0]?.email}
        />
        <RowOnboarding
          a="phone #"
          b={userdetails[0]?.phone}
        />
        <RowOnboarding
          a="unique id"
          b={params.uid}
        />
        <RowOnboarding
          a="company"
          b={userdetails[0]?.curr_employer}
        />
        <RowOnboarding
          a="designation"
          b={userdetails[0]?.designation}
        />
        <RowOnboarding
          a="tenure"
          b={userdetails[0]?.tenure}
        />
      </div>

      <div>
        <div className="heading-cp-css head-font">sell/buy</div>
        <div className="container-sm  main-con">
          <div className="row g-4">
            <div className="col-4">
              <div className="cell-wide cell purple-b">
                <strong>company</strong>
              </div>
            </div>
            <div className="col-4">
              <div className="cell-mid cell purple-b">
                <strong>inventory</strong>
              </div>
            </div>
            <div className="col-3">
              <div className="cell-mid cell purple-b">
                <strong>ownership</strong>
              </div>
            </div>
          </div>
          {userdetails.map((detail) => {
            return (
              <div>
                <RowUserPage
                  a={detail?.c_name}
                  b={detail?.no_of_shares}
                  c={detail?.doc_url}
                />
              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default UserPage