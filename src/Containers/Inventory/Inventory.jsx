import React from 'react'
import { useNavigate } from "react-router";

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
  else if (userobj.email === "awasthiabhinav744@gmail.com") {   //bhanu@zionn.trade
    checkadmin = true;
  }
  else {
    setTimeout(() => {
      navigate("/");
    }, 1000)
  }
  return (
    <div>{checkadmin&&<>Users</>}</div>
  )
}

export default Inventory