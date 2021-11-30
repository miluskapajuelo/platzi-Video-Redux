import axios from "axios";
import { useState, useEffect } from 'react';

//get all products
const useInitialState =(URL)=>{

  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    const getData = async()=>{
      const resp = await axios({
        method: "GET",
        url: URL,
        headers: {
          'Content-Type': 'application/json', 
        }
      })
      if(resp){
        setVideos(resp.data.initialState)
      }
      
    }
    getData()
     
    },[])
  return videos

}
export default useInitialState;