import { useEffect, useState } from "react";
import Todo from "./Todo";

function Todos() {
  const [data, setData] = useState([]);
  const initializefun = async () => {
    const response = await fetch("/display");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    initializefun();
  }, []);

  return (
    <div>
      <div className="row">
        {data.map((element) => {
          return (
            <div className="col-md-4" key={element._id}>
              <Todo
                id={element._id}
                date={element.date}
                todo={element.todo}
                fav={element.fav}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
