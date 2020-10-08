// 
// i den här helper modulen finns setup för att hämta data med axios
// 
import axios from 'axios';
// 
// 
// ,
// 'Authentication': 'bearer ' + sessionStorage.getItem('token') 
//  http://localhost:9999/api/v1/products
export default axios.create({
  baseURL: 'http://localhost:9999/api/v1',   
  headers: {
      'Content-Type': 'application/json'
  }
})







