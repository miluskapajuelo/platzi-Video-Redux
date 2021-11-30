import axios from "axios";

//get all products
export const coursesAll =async()=>{

  const resp = await axios({
    method: "GET",
    url: "https://raw.githubusercontent.com/xsrpm/frontend-nodejs/master/platzi-video/initialState.json",
    headers: {
      'Content-Type': 'application/json', 
    }
  })
  return console.log(resp, 'resp')

}