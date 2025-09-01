import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"


const root = createRoot(document.getElementById('root'));
root.render(<App/>);
