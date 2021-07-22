import React from "react";
import { Link } from "react-router-dom";



function LogIn(props) {

//make sure links to are exact path
  return (
    <form>
 <h2>Log In</h2>
    <label>
      <p>Username</p>
      <input type="text" />
    </label>
    <label>
      <p>Password</p>
      <input type="password" />
    </label>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  );
}

export default LogIn;


// import React from 'react';

// export default function Login() {
//   return(
//     <form>
//       <label>
//         <p>Username</p>
//         <input type="text" />
//       </label>
//       <label>
//         <p>Password</p>
//         <input type="password" />
//       </label>
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   )
// }