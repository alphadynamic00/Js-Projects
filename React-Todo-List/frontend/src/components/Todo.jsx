/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import "../css/todo.css";
import { StarBorderRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Todo(props) {

  const monMap = {"01": "January", "02": "February", "03": "March", "04": "April" ,"05": "May" ,"06" : "June" ,"07" : "July" ,"08" : "August" ,"09" : "September" ,"10" : "October" ,"11" : "November", "12": "December"}


  const [date,setDate] = useState("")

  const makeMonString = (month)=>{
    return monMap[month];
  }

  const dateMaker = ()=>{
    const year = props.date.slice(0,4);
   const month = props.date.slice(5,7);
   const monString = makeMonString(month);
   const day = props.date.slice(8,10);
   setDate(day + " " + monString + ' ' + year);
  }

  useEffect(dateMaker, [])


  const refreshPage = ()=>{
    window.location.reload();
 }

  const handleSubmit = event => {
    event.preventDefault();
      const data = {
        id : props.id
      };
      axios
      .post("/delete", data)
      .then(res => {console.log(res);refreshPage()})
      .catch(err => console.log(err));
    }

    const favstyle = {backgroundColor:"gold", borderRadius:"100%"}
    const nostyle= {backgroundColor:"white"}

  
  return (
    <div className="container my-3" >
      <div className="card" id="cardbody">
        <div className="card-header" style={{fontFamily: "'Ubuntu', sans-serif"}}>{date}</div>
        <div className="card-body" id="card_todo">
          <p className="card-text">{props.todo}</p>
          <form method="post" onSubmit={handleSubmit} className="form">
            <button
              type="submit"
              className="btn btn-primary btn-sm"
            >
              Delete
            </button>
          <StarBorderRounded className="mx-3" style = {(props.fav)?favstyle:nostyle}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todo;
