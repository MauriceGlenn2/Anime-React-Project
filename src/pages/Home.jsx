import React, { useState, useEffect } from 'react'
import pngegg from '../assets/pngegg.png'
import axios from 'axios';



const Home = () => {

  const [search, setSearch] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const [loading, setLoading] = useState(true);

  function onSearch() {
    getResults(searchTitle)
  }

  async function getResults(search) {
    setLoading(true)
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&limit=6`)
    setSearch(data)
    setLoading(false)
    console.log(data)
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

      {loading ? (
        <div>Loading...</div>
      ) : (
        search.data.length === 0 ? (<div className='null__results'>
          <img className='null__results--img' src={pngegg} alt="" />
          <p className="title__header--para">Start Your Search</p>
        </div >) : (
              <><div className="row" >
            {search.data.map((result, index) => (
                <div id="results__container">
                <div className="results__wrapper three-elements-per-row">
                    <div className="results">
                      <div className="results__info">
                        <img className="anime__img" src={result.images.webp.image_url}/>
                        <p className="movie__discription">{result.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              
            ))}
              </div>
          </>
        )
      )}
    </>
  )
}

export default Home;

