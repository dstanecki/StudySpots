import React from "react";
import "./Header.js";
import "./Header.css";
import GoogleLogin from 'react-google-login';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { eachMonthOfInterval } from "date-fns";



var App = require("./App.js");


function Header() {
  const history = useHistory();
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  
  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));

  };
  

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }
  const handleFailure = (result) => {
    alert(result);
  };
  return (
    <div className="header">
        <Link to="/">
          <img
            className="header__icon"
            src={process.env.PUBLIC_URL + "/media/logo.png"}
            alt="logo"
          />
        </Link>

      <div className="header__center">
        <h1>Get A Study Space!</h1>
      </div>

      <div className="header__right">
        {/* <LanguageIcon />
        <ExpandMoreIcon /> */}
        <Button className="admin-button" onClick={() => history.push("/admin")}>
          Admin
        </Button>
        {loginData ? (
            <div>
              <h3>You logged in as {loginData.name}</h3>
              <Button className="admin-button" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={renderProps => (
                <Button className="admin-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</Button>
              )}
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        <Avatar
        
        />
      </div>
    </div>
  );
}

export default Header;
