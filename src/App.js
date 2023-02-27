import Register from "./Register";
import axios from "axios";
function App() {
  axios.defaults.baseURL ='http://localhost:4000' 
  // witCredentials we are using here so we can set cookies from api 
  axios.defaults.withCredentials = true;
  return (
    <Register />
  
  );
}

export default App;
