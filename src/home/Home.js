import React from 'react'
import './Home.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navbar from '../component/navbar/Navbar';
import Featured from '../component/featured/Featured';
import List from '../component/list/List';
export default function Home() {
  return (
    
          <div className="Home">
        <Navbar />
      <Featured  />
      <List />
      <List />
      <List />
      <List />
       <List/>
    </div>
  )
}
