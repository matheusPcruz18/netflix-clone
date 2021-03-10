import { HeaderContainer, Left, Right } from './style'

//ICONS
import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header({ black }) {
  return (
    <HeaderContainer style={{background: black ? '#141414' : 'transparent'}}>
      <Left>
        <div className="logo">
          <a href="#">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="netflix-logo"
            />
          </a>
        </div>
        <span>Início</span>
        <span>Séries</span>
        <span>Filmes</span>
        <span>Bombando</span>
        <span>Minha lista</span>
      </Left>

      <Right>
        <SearchIcon className="searchIcon" />
        <span>INFANTIL</span>
        <RedeemIcon className="giftIcon" />
        <NotificationsIcon className="bellIcon" />
        <a href="#">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="profile-pic"/>
        </a>
      </Right>
    </HeaderContainer>
  )
}