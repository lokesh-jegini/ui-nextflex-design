import React from 'react'
import './Featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({ type }) {
 
  return (
    <div className="Featured">  
       {
    type && (
          <div className="category">
            <span>{type === "movie" ? "Movie" : "Series"}</span>
            <select name="genre" id="genre">
             
              <option  >slecet gener</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option> 
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="historical">Historical</option> 
              <option value="documentary">Documentary</option> 
            </select>
</div>
  )}
          <img src="https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY=" alt="" />
          <div className="info">
        <img src="data:image/jpeg;base64,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" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, nemo?
        </span>
        <div className="button">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
             <span>info</span>
          </button>
        </div>
          </div>
        </div>
          
      
  )
}
