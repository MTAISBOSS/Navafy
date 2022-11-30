import React from 'react'
import './Playlist.css'
const popupwindow = () => {
  document.getElementById('add').innerHTML = '<div><form><input type="text" placeholder="نام پلی لیست" style="padding:1%;margin:4% 0;width:100%;border-radius:10px;color:black;"/><button style="padding:1% 3%;margin:0 45%;">افرودن</button></form></div>';
}
const PlayList=() =>{
    return(
    <body id="main">
      <div class="row">
        <div class="col-3 sidebar">
          <ul>
            <li className='selected'>
            پلی لیست 1
            </li>
            <li className='notselected'>
            پلی لیست 2
            </li>
            <li className='notselected'>
            پلی لیست 3
            </li>
            <li className='notselected'>
            پلی لیست 4
            </li>
          </ul>
          <button onClick={popupwindow}>افزودن</button>
        </div>
        <div class="col-9" id="add"><h1>نام پلی لیست</h1>
          <div className='musics'>
            <div className='toolbar'>
              <button className='shuffleplay'>پخش درهم</button>
              <button className='orderplay'>پخش مرتب</button>
            </div>
            <ul>
              <li> اهنگ 1</li>
              <li> اهنگ 2</li>
              <li> اهنگ 3</li>
              <li> اهنگ 4</li>
              <li> اهنگ 5</li>
            </ul>
          </div>
        </div>
      </div>
      </body>)
}

export default PlayList;
