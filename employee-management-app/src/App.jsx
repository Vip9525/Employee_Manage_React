import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar  from './components/Sidebar'
import AddEmployee from './components/Employee/AddEmployee'
import EmployeeList from './components/Employee/EmployeeList'

function App() {

  const [count, setCount] = useState(0)
  const [headerName, setHeaderName] = useState("Header")
  const [footerName, setFooterName] = useState("Footer")
  const [sideBarName, setSideBarName] = useState("Sidebar")
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
       <div className='app-sidebar'>
           <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      
      <div className='content'>
              <Header headerName={headerName}/>
              {selectedTab==="Add Employee" && <AddEmployee/>}
              {selectedTab==="Employee List" && <EmployeeList/>}
             
               <Footer footerName={footerName}/>
     </div>
     </div>
    </>
  )
}

export default App
