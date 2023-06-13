//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";


function App() {
	
	const [movieName, setMovieName] = useState("");
        const [review, setReview] = useState("");

        const submitReview = () => {
          Axios.post("http://192.168.0.9:8000/api/insert", {
                  movieName: movieName,
                  movieReview: review,
          }).then((response) => {
                  alert("insert success");
        })
        }


  return (
    <div className="App">

	<h2>Test Application</h2>

          <div className="myform">
            <label>Movie Name</label>
            <input type="text" name="movieName" onChange={(e)=> {
                    setMovieName(e.target.value) }}/>

            <label>User Reviews</label>
            <input type="text" name="review" onChange={(e)=> {
                    setReview(e.target.value) }}/>

            <button onClick={submitReview}>Submit</button>
          </div>	  

    </div>
  );
}

export default App;

