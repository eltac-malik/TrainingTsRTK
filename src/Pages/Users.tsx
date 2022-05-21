import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import Card from "../components/Card";
import "../style/Users.css";

function Users() {
  
  interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}
  
const data = useSelector<any>((state) => state.dataInfo.post)

console.log(data);


  return (
    <div className="user-page">
      {/* <div className="users">
        {data.length !== 0 ? (
          page.map((e) => {
            return <Card  />;
          })
        ) : (
            <p>Loading...</p>
        )}
      </div>
      <button className='btn' onClick={()=> setNext(next+6)}>
        Next <i className="fa-solid fa-chevron-right"></i>
      </button> */}
    </div>
  );
}

export default Users;