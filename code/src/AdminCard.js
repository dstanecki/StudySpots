import React from "react";
import "./AdminCard.css";

function AdminCard({ location, name, email, date, time, duration }) {
  return (
    <div className="admin-card">
      <div className="location-name">{location}</div>
      <div className="customer-name">{name}</div>
      <div className="email">{email}</div>
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="time-range">{duration}</div>
    </div>
  );
}

export default AdminCard;
