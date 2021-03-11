import { Overlay, ModalContainer} from './style'
import Tmdb from '../../tmdb'

//ICONS
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useState } from 'react';

export default function MoreInfoModal({id, info, close}) {
  const [key, setKey] = useState('')
  const firstDate = new Date(info.first_air_date || info.release_date)
  console.log(info)

  useEffect(() => {
    const showKey = async () => {
      let videoInfo = await Tmdb.getKey(id, info.first_air_date ? 'tv' : 'movie')
      console.log(videoInfo)
      setKey(videoInfo.results[0].key)
    }

    showKey()
  }, [])
  return (
    <>
      <Overlay>
        <ModalContainer>
          <div className="closeIcon" onClick={close}>
            <CloseIcon className="icon" />
          </div>

          {key.length <= 0 ? (
            <div className="videoContainer">
              <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt="cover"/>
            </div>
          ) : (
            <div className="videoContainer">
              <iframe width="100%" height="100%" src={`//www.youtube-nocookie.com/embed/${key}?autoplay=1&showinfo=0&controls=0`}/>
          </div>
          )}
        
          <div className="information">
            <div className="name">
              <h3>{info.original_name || info.original_title}</h3>
            </div>

            <div className="headerInfo">
              <span className="points">{info.vote_average} pontos</span>
              <span className="year">{firstDate.getFullYear()}</span>
            </div>

            <div className="description">
              {info.overview}
            </div>
          </div>
        </ModalContainer>
      </Overlay>
    </>
  )
}