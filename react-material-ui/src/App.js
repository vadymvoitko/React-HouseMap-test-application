import React from 'react'
import Drawer from './components/Drawer.jsx'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return ( 
    <Router>
      <div>
        <Drawer/>
      </div>
    </Router>
  )
}
export default App;