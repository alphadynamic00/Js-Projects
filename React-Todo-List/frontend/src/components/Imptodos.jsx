import { useEffect, useState} from 'react';
import Todo from './Todo';

function Imptodos() {

    const [favdata,setFavData] = useState([]);

   

    const initializefav = async ()=>{
      const response = await fetch('/display/fav')
      const json = await response.json()
      setFavData(json);
    }
    useEffect(() => {
      initializefav();
    }, [])
    
    return (
      <div>
      <div className="row">
        {favdata.map((element) => {
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
    )
}

export default Imptodos
