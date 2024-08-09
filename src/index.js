// import React from "react";

// // import App from './app'

// // ReactDom.render(<App/>,document.getElementById("root"));


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   )
  

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
