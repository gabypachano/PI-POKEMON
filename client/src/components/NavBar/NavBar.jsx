import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';

function NavBar() {

  return (
    <div className='nav-container'>
      <div className='img-container'>
        <Link to={"/"}> <img src="https://cdn.vox-cdn.com/thumbor/yysokBKQ-hg7Ap68uxCteAXbY6A=/0x0:2870x1591/1400x933/filters:focal(1992x551:2450x1009):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/72110370/Screen_Shot_2023_03_24_at_9.25.38_AM.0.png" alt="img-landing" /> </Link>
      </div>
      <div className='link-container'>
        <Link to={"/home"}>
          <button>Home</button>
        </Link>
        <Link to={"/create"}>
          <button>Create</button>
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
        <Filters />
    </div>
  )
}

export default NavBar