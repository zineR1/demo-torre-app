import axios from "axios";



export function getDetail(name){   
    return async function (dispatch){
          const json = await axios.get('http://localhost:3001/torreapp/' + name);
          localStorage.setItem("person", JSON.stringify(json.data))         
}
}