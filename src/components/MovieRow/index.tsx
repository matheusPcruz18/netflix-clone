import { useState } from 'react'
import { Container, ListArea } from './style'

//ICONS
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import MoreInfoModal from '../MoreInfoModal'

export default function MovieRow({ title, items }) {
  const [showInfo, setShowInfo] = useState(false)
  const [scrollX, setScrollX] = useState(0)
  const [movieId, setMovieId] = useState('')
  const [information, setInformation] = useState(null)
  const listWidth = items.results.length * 325
  
  const getId = (key, item) => {
    setMovieId(items.results[key].id)
    setShowInfo(true)
    setInformation(item)
  }

  const closeMoreInfo = () => {
    if(showInfo){
      setShowInfo(false)
    }
  }

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0){
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 231.5
    if((window.innerWidth - listW) > x){
        x = window.innerWidth - listW - 60
    }
    setScrollX(x)
  }

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <div className="arrow-left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{fontSize: 50}} />
        </div>
        
        <div className="arrow-right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{fontSize: 50}} />
        </div>
      <ListArea>
        <div 
          className="list" 
          style={{marginLeft: scrollX, width: listWidth}}
        >
            {items.results.length > 0 && items.results.map((item, key) => (
              <>
                <div key={key} className="each" onClick={() => (getId(key, item))}>
                  <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt={item.original_title} />
                </div>
              </>
            )) }
          </div>
        {showInfo && <MoreInfoModal id={movieId} info={information} close={closeMoreInfo} />}
        </ListArea>
      </Container>
    
    </>
    
  )
}