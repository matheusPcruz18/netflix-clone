import { Overlay, ModalContainer} from './style'
import Tmdb from '../../tmdb'

//ICONS
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from 'react';

export default function MoreInfoModal({ id }) {

  /*useEffect(() => {
    const showKey = async () => {
      let videoInfo = await Tmdb.getKey(63174, 'tv')
      console.log(videoInfo.key)
    }

    showKey()
  }, []) */

  return (
    <>
      <Overlay>
        <ModalContainer>
          <div className="videoContainer">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"/>
          </div>
        </ModalContainer>
      </Overlay>
    </>
  )
}