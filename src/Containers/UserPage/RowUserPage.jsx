import React from "react";
import { useState,useEffect } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";
import * as api from "../../axios"

const RowUserPage = (props) => {

  var date = new Date(parseInt(props.e));
  var dateToStr = date.toUTCString().split(' ');
  var cleanDate = dateToStr[1] + ' ' + dateToStr[2] + ' ' + dateToStr[3] + ' ' + dateToStr[0] + ' ' + dateToStr[4];
  var sect="";
  if(props.d=="esop")
  sect="ESOP"
  else sect="SU"
  
  return (
    <div>
      <div className="row mt-2 gr-4">
        <div className="col-3 ">
          <div className="cell-wide cell"><a style={{ textDecoration: 'none ', color: '#7b61ff' }} target="___blank" href={`https://beta.zionn.trade/company/${props.a}`}>{props.a || <Skeleton width={80} height={15} />}{props.a ? (<i className="bi bi-arrow-up-right" />) : (<></>)}</a></div>
        </div>
        <div className="col-2 ">
          <div className="cell-mid cell">{props.b || <Skeleton width={80} height={15} />}</div>
        </div>
        {/* <div className="col-4">
          <div className="cell-mid cell">{props.c || <Skeleton width={80} height={15} />}</div>
        </div> */}
        <div className="col-1 ">
          <div className="cell-mid cell">{props.d?sect: <Skeleton width={80} height={15} />}</div>
        </div><div className="col-3 ">
          <div className="cell-mid cell">{props.e ? cleanDate : <Skeleton width={80} height={15} />}</div>
        </div>
        <div className="col-2">
          <div className="row">
            <div className="col-8"><div className="cell-mid cell">{props.c ? <><a style={{ textDecoration: 'none ', color: '#7b61ff' }} target="___blank" href={props.c}>view <i className="bi bi-arrow-up-right" /></a></> : <Skeleton width={80} height={15} />}</div></div>
            <div className="col-4"><NavLink className="cell-mid cell" to={`/users/user/updatedoc/${props.f}/${props.e}/${props.a}`}><i className="bi bi-pen-fill" /></NavLink></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RowUserPage;
