import { useEffect, useState } from 'react'
import Head from 'next/head'

import Tmdb from '../tmdb'

import { HomeContainer } from '../../styles/Home'

//Components
import MovieRow from '../components/MovieRow'
import FeaturedMovie from '../components/FeaturedMovie'
import Header from '../components/Header'

export default function Home() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAll = async () => {
      //Getting full list
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Set Featured Movie
      const originals = list.filter(i => i.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * originals[0].items.results.length - 1)
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      console.log(chosenInfo)
      setFeaturedData(chosenInfo)
    }
    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return() => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <HomeContainer>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="logo.png" type="image/png"/>
        <title>Netflix Clone</title>
      </Head>
      <Header black={blackHeader} />
      { featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="heart">❤</span> por <a href="https://github.com/matheusPcruz18">Matheus Pereira</a> <br/>
        Direitos de imagem: <span>Netflix</span> <br/>
        API utilizada: <a href="https://www.themoviedb.org/">tmdb</a>
      </footer>
      
      {featuredData === null &&
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }
      
    </HomeContainer>
  )
}
