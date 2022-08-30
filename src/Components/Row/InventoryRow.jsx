import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const InventoryRow = (props) => {
  return (
    <div>
      <div className="row mt-2 gr-4">
        <div className="col-3 ">
          <div className="cell-wide cell">{props.a}</div>
        </div>
        <div className="col-3 ">
          <div className="cell-mid cell">{props.b||<Skeleton width={80} height={15} />}</div>
        </div>
        <div className="col-3">
          <div className="cell-mid cell">{props.c||<Skeleton width={80} height={15} />}</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryRow;
