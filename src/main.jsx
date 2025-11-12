
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import "./font.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
