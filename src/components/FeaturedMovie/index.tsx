import { Fatured, Info, Description, Buttons, Genres } from './style'

//ICONS
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function FeaturedMovie({item}) {
  const firstDate = new Date(item.first_air_date)
  const seasons = item.number_of_seasons
  const genres = []
  for(let i in item.genres){
    genres.push( item.genres[i].name )
  }
  let description = item.overview
  if(description.length > 200){
    description = description.substring(0, 250) + '...'
  }

  return (
    <Fatured style={{
      background: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="shade-vertical">
        <div className="shade-horizontal">
          <div className="title">{item.original_name}</div>
          <Info>
            <div className="points">{item.vote_average} pontos</div>
            <div className="year">{firstDate.getFullYear()}</div>
            <div className="seasons">{seasons} temporada{seasons !== 1 && 's'}</div>
          </Info>
          <Description>
            {description}
          </Description>
          <Buttons>
            <a className="watch-btn" href={`/watch/${item.id}`}>▶  Assistir</a>
            <a className="moreInfo-btn"  href={`/info/${item.id}`}>
              <InfoOutlinedIcon style={{marginRight: '5px'}} />
              Mais informações
            </a>
          </Buttons>
          <Genres><strong>Gêneros: </strong>{genres.join(', ')}</Genres>
        </div>
      </div>
    </Fatured>
  )
}