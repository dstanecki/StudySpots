import React from "react";
import "./Admin.css";
import { useState, useEffect } from "react";
import AdminCard from "./AdminCard";


function Admin() {
  var [DBdata, setDBdata] = useState(
  );
  function AdminC({ DBdata }) {
    console.log(DBdata)
    return (
      <div className="admin-card">
        <div className="location-id">{DBdata.location_id}</div>
        <div className="user-id">{DBdata.user_id}</div>
        <div className="start_date">{DBdata.start_date}</div>
        <div className="time-range">{DBdata.duration}</div>
      </div>
    );
  }

  const fetchData = async (data) => {
     const res = await fetch('/api/DBRetrieve', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    data = await res.json();
    console.log(data);
    DBdata = data;
    alert(DBdata[0]);
    AdminC(DBdata[0].start_date)
    console.log(DBdata);
    
  }
  
  
    useEffect(() => {
      fetchData();
      }, []);


  return (
    <div className="admin">
      <h1>Admin Logs</h1>
      <div className="headings">
        <div className="table-heading">Location</div>
        <div className="table-heading"> Customer Name</div>
        <div className="table-heading">Email Address</div>
        <div className="table-heading">Date</div>
        <div className="table-heading">Time</div>
        <div className="table-heading">Time Range</div>
      </div>



))
    
    <button onClick={AdminC}>push</button>

      <AdminCard
        location= ""
        name="Jacob"
        email="jroberson@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
      <AdminCard
        location="MTCC"
        name="Jacob"
        email="jroberson@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
      <AdminCard
        location="MTCC"
        name="Jacob"
        email="jroberson@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
      <AdminCard
        location="MTCC"
        name="Jacob"
        email="jroberson@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
    </div>
  );
  }

export default Admin;
