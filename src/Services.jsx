import React from "react";
import logo from './3d-2.jpeg'
import Card from "./Card";
import SData from "./SData";

const Services=()=>{
    return (
    <>
    <div className="my-5">
  <h1 className="text-center"> Our Services </h1>
</div>
<div className="container-fluid mb-5">
  <div className="row">
    <div className="col-10 mx-auto">
      <div className='row gy-4'>
          {SData.map((currdata,ind)=>{
              return (<Card imgsrc={currdata.imgsrc} name={currdata.title}></Card>)
          })}
      </div>
    </div>
  </div>
</div>
    </>
    )
}

export default Services
