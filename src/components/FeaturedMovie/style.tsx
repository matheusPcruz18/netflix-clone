import styled from 'styled-components'

export const Fatured = styled.div`
  height: 100vh;
  
  .shade-vertical{
    width: inherit;
    height: inherit;
  
    background: linear-gradient(to top, #111 2%, transparent 25%);

      .shade-horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 15%, transparent 75%);

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 128px;
        padding-top: 70px;
      }
  }

  .title{
    font-size: 60px;
    font-weight: bold;
  }

  @media (max-width: 760px){
    height: 90vh;
    line-height: 23px;
    .title{
      font-size: 40px;
    }
  }
`

export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 760px){
    font-size: 16px;
  }
  
  .points, .year, .seasons{
    display: inline-block;
    margin-right: 15px;
  }

  .points{
    color: #46d369;
  }
`

export const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  max-width: 40%;

  @media (max-width: 760px){
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
    color: #dddddd;
  }
`

export const Buttons = styled.div`
  margin-top: 15px;
  display: flex;

  

  .watch-btn, .moreInfo-btn{
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 11px 20px;
    border-radius: 5px;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;

    :hover{
      opacity: 0.7;
    }

    @media (max-width: 760px){
      font-size: 16px;
      padding: 8px 20px;
    }
  }

  .watch-btn{
    background: #fff;
    color: #000;
  }

  .moreInfo-btn{
    background: #333;
    color: #fff;
    
  }
`

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 760px){
    font-size: 14px;
  }
`

