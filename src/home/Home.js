import React from 'react'
import './Home.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Navbar from '../component/navbar/Navbar';
import Featured from '../component/featured/Featured';

export default function Home() {
  return (
    
          <div className="Home">
        <Navbar />
      <Featured type= "movie" />
    </div>
  )
}
