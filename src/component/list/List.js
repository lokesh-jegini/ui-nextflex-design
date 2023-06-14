import React from 'react'
import './List.scss'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Listitem from '../listitem/Listitem';
export default function List() {
  return (
    <div>
          <div className="List">
              <span className="listTitle">
                  Continue to watch 
        </span>
        <div className="wrapper">
              <ArrowLeftOutlinedIcon className='sliderArrow left'/>
              <div className="container">
                  <Listitem />
                  <Listitem />
                  <Listitem />
                  <Listitem />
                  <Listitem />
                  <Listitem />
                  <Listitem />
            <Listitem />
            <Listitem />
            <Listitem/>
              </div>
              <ArrowRightOutlinedIcon className='sliderArrow right' />
        </div>
        </div>
    </div>
  )
}
