import "./Reserve.css";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { set } from "date-fns";

function Reserve() {
  const [inputs, setInputs] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    var jsonsender =  {
      'FirstName' : inputs.first_name_field,
      'LastName' : inputs.last_name_field,
      'Email' : inputs.email_field,
      'Location' : inputs.location,
      'Date' : inputs.date_field,
      'TimeField' : inputs.time_field,
      'TimeRange' : inputs.time_range
    };
    console.log(jsonsender);
    fetch('/api/Reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonsender)
    }).then(function(response) {
      console.log(response)
      return response.json();
    });
    
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="reserve">
      <h1>Reserve</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="first_name_field"
              placeholder="First name"
              value={inputs.first_name_field || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="last_name_field"
              placeholder="Last name"
              value={inputs.last_name_field || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Hawk Email Address:{" "}
            <input
              type="email"
              name="email_field"
              placeholder="Email"
              value={inputs.email_field || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Date:{" "}
            <input
              type="date"
              name="date_field"
              placeholder="mm/dd/yyyy"
              value={inputs.date_field || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>
            Time:{" "}
            <input
              type="time"
              name="time_field"
              value={inputs.time_field || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label>Time Range: </label>
          <select
            name="time_range"
            value={inputs.time_range || ""}
            onChange={handleChange}
          >
            <option value="30 minutes">30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="1 hour 30 minutes">1 hour 30 minutes</option>
            <option value="2 hours">2 hours</option>
          </select>
        </div>
        <div>
          <label>Location: </label>
          <select
            name="location"
            value={inputs.location || ""}
            onChange={handleChange}
          >
            <option value="IIT Tower">IIT Tower</option>
            <option value="Library">Library</option>
            <option value="MSV">MSV</option>
            <option value="MTCC">MTCC</option>
            <option value="Perlstein">Perlstein</option>
            <option value="Rettaliata Engineering Center">
              Rettaliata Engineering Center
            </option>
            <option value="Seigel">Seigel</option>
            <option value="Technology Park">Technology Park</option>
            <option value="Wishnick">Wishnick</option>
          </select>
        </div>
        <div className="button">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Reserve;