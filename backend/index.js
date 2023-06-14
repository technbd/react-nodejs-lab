import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express()

//Body data for POST method:
app.use(express.json());

//Access the APIs from the react application:
app.use(cors());

//Server Listening Port:
app.listen(8000, ()=>{
        console.log("Server is up and running on port 8000")
     })


//Creating DB connection:
//const db = mysql.createConnection({
const db = mysql.createPool({
	host:"192.168.0.9",
	user:"root",
	password:"admin123",
	database:"movie"
	});


//GET Request:
app.get("/", (req, res)=>{
	const q = "select * from mreview";
	
	db.query(q,(err, rows)=>{
	
	if(err) return res.json(err)
	return res.json(rows)
	})
       });

 
//Data insert using 'GET' method fot test purpose.
//GET Request:
app.get("/insert", (req, res)=> {
	const i = "insert into mreview (movieName, movieReview) values ('The Whale', 'nice');";
	
	db.query(i, (err, data)=> {
	res.send("Data inserted");
	
	
        });
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Data insert using 'Post' method using frontend (Reat): [Getting Error]
app.post("/api/insert", (res, req) =>{
	
	const movieName = req.body.movieName;
	const movieReview = req.body.movieReview;

  	const i = "insert into mreview (movieName, movieReview) values (?,?)";

        db.query(i, [movieName, movieReview], (err, data)=> {
	
	console.log(data);
        //res.send("Data inserted");
	})
});







