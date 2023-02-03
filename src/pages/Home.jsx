import React, { useState, useEffect } from 'react'
import pngegg from '../assets/pngegg.png'
import axios from 'axios';


const Home = () => {
  const [search, setSearch] = useState(['Naruto'])
  const [searchTitle, setSearchTitle] = useState()
  const [loading, setLoading] = useState();

  function onSearch() {
    getResults(searchTitle)
  }

  async function getResults() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&limit=6`)
    setSearch(data)
    console.log(data)
    setLoading(false)
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <>
      <div className='header__container'>
        <div className="title__para">
          <h1 className="title__header--discription">Anime Finder</h1>
          <p className="title__header--para">Gain information on your favortie anime with <b><strong className="purple">ANIME FINDER</strong></b></p>
        </div>
        <div className="input__wrapper">
          <input className="input__search" type="text" placeholder="Search Anime By Name"
            onChange={(event) => setSearchTitle(event.target.value)}></input>
          <button className="search__btn" onClick={() => onSearch()}>Find</button>
        </div>
      </div>
      {
        loading ? (
        new Array(6).fill(0).map((element, index) =>(
        <div className='null__results'>
          <img className='null__results--img' src={pngegg} alt="" />
          <p className="title__header--para">Start Your Search</p>
          </div>)))
         :
         
          <div className="row" >
            <div id="results__container">
              <div className="results__wrapper">
                <div className="results">
                  <div className="results__info">
                    <img className='null__results--img' src="{}" alt="" />
                    <p className="movie__discription">Title: </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
      }



    </>
  )
}

export default Home;