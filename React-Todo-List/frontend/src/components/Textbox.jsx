import axios from "axios";
import React, { useState } from "react";


function Textbox() {
    const [todo,setTodo] = useState("");
    const [fav,setFav] = useState(false);

    const toggleCheck = ()=>{
      setFav(!fav);
    }

    const refreshPage = ()=>{
      window.location.reload();
   }

    const addData = async (e)=>{
        e.preventDefault();
        const data = {
          todo : todo,
          fav :fav
        };
        axios
        .post("/add", data)
        .then(res => {console.log(res);refreshPage()})
        .catch(err => console.log(err));
    }
  return (
    <div className="container my-3">
      <form method="post" className="row g-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value = {todo}
            onChange={(e)=>{setTodo(e.target.value)}}
          />
        </div>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" onClick={toggleCheck} id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Important
  </label>
</div>
        <div>
          <button type="submit" className="btn btn-primary" onClick={addData}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Textbox;
