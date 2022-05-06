const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 5000;
const { OAuth2Client } = require('google-auth-library');
var mysql = require('mariadb');
const { ConfirmationNumber, EcoSharp, CollectionsOutlined, ContactSupportOutlined } = require('@material-ui/icons');
const { rangeShape } = require('react-date-range/dist/components/DayCell');
const { randomInt } = require('crypto');
const { get } = require('http');
const { Console } = require('console');

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const app = express();
app.use(express.json());


var pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "Juan",
  password: "Hello",
  database: "main"

})

const users = [];
function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

async function dbReserve(FirstName, LastName, Email, Location, Date, Time, Time_Range) {
  let conn;
  try {
   conn = await pool.getConnection();
  
   const id  = await conn.query("SELECT user_id FROM main.Users WHERE first_name = (?) AND last_name = (?) AND email = (?)",[FirstName, LastName, Email]);
   let user_id = `${id.user_id}`;
   console.log(user_id);
   await conn.query("INSERT INTO Reservations (user_id, location_id , start_date, duration) VALUES (?, ?, ?, ?)", [ user_id, Math.floor(Math.random() * 10) + 1, Date, Time[0]]);
  
   
  } finally {
    if (conn) conn.release();
  }
 };

 async function DBRetrieve() {
  let conn;
  var retrieve;
  var id;
  try {
    conn = await pool.getConnection();
    retrieve = await conn.query("SELECT * FROM main.Reservations");
    

  } finally {
    if (conn) conn.release();

  }
  
  return retrieve;
 };
 
async function dbconnect(name, email) {
 let conn;
 let fullname = name.split(" ");
 try {
  conn = await pool.getConnection();
  console.log(await conn.query("SELECT first_name, last_name, email FROM main.Users WHERE first_name = (?) AND last_name = (?) AND email = (?)",[fullname[0], fullname[1], email]));
  if (! await conn.query("SELECT first_name, last_name, email FROM main.Users WHERE first_name = (?) AND last_name = (?) AND email = (?)",[fullname[0], fullname[1], email]) == (fullname[0], fullname[1], email) )
  {
  const row = await conn.query("INSERT INTO Users (first_name, last_name, email) VALUES (?, ?, ?)", [fullname[0], fullname[1], email]);
  }
  else{
    console.log("It Freaken works");
  }
 } finally {
   if (conn) conn.release();
 }
};
app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  dbconnect(name, email);
  res.status(201);
  res.json({ name, email, picture });
});
app.post('/api/Reserve',(req, res) => {
  console.log(req.body);
  
  //Passes req.body Array into seperate constant variables
  const firstname = req.body.FirstName;
  const lastname = req.body.LastName;
  const email = req.body.Email;
  const location = req.body.Location;
  const date = req.body.Date;
  const time_field = req.body.TimeField;
  const time_range = req.body.TimeRange.split(":");


  console.log(time_field);
  dbReserve(firstname, lastname, email, location, date, time_field, time_range);
  res.status(201);
});

app.get('/api/DBRetrieve', (req, res) => {
  (async function() {
    const response = await DBRetrieve();
    
    let Holder = {};
    let Holders = [];

    var user_id = [];
    var start_date = [];
    var location_id = [];
    var duration = [];
    var reservation_id = [];

    for (i = 0, len = response.length; i < len; i++) {
     
      
      var tmp = `${response[i].user_id}`;
      user_id = tmp;0
      Holder.user_id = user_id;
      tmp = `${response[i].start_date}`;
      start_date = tmp;
      Holder.start_date = start_date;
      tmp = `${response[i].location_id}`;
      location_id = tmp;
      Holder.location_id = location_id;
      tmp = `${response[i].duration}`;
      duration = tmp;
      Holder.duration = duration;
      tmp = `${response[i].reservation_id}`;
      reservation_id = tmp;
      Holder.reservation_id = reservation_id;
      tmp = Holder
      console.log(tmp);
      Holders.push(tmp);
      

      
      //console.log(`${response[i].user_id} ${response[i].start_date} <${response[i].duration}>`);
   }
   console.log(Holder);
   for (i = 0, len = response.length; i < len; i++) {
     //console.log(Holders[i]);
     
   }
   res.json(Holders);
  })();
})

app.use(express.static(path.join(__dirname, '/src')));
/*app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/src/header.js'))
);
*/

app.listen(PORT, () => {
  console.log('Server connected at:',PORT);
});
