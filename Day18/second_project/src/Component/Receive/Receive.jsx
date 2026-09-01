import React from "react";

export default function Receive({ prodDetails }) {
  let { id, prodName, price, desc, quantity, onSale } = prodDetails;
  return (
    <>
      <div className="col-md-3 ">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{id}</h4>
            <h4 className="card-title">{prodName}</h4>
            <h4 className="card-title">{price}</h4>
            <h4 className="card-title">{desc}</h4>
            <h4 className="card-title">{quantity}</h4>
            <h4 className="card-title">{onSale ? "50%" : "not available"}</h4>
            <div className="d-flex justify-content-evenly my-2">
              <button className="btn btn-danger ">Delete</button>
              <button className="btn btn-primary">Update </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
