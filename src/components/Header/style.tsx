import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  height: 70px;
  width: 100%;
  background: transparent;
  transition: all linear 0.3s;

  @media (max-width: 760px){
    transition: all ease 0.1s;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  .logo, span{
    margin-right: 30px;
    cursor: pointer;
  }

  .logo{
    img{
      width: 100px;
      height: 100%;
    }
  }

  span{
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 760px){
    span{
      display: none;
    }
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  .searchIcon, .giftIcon, .bellIcon, span{
    margin-right: 20px;
    cursor: pointer;
  }

  img{
    width: 35px;
    border-radius: 5px;
  }

  @media (max-width: 760px){
    margin-left: 25px;

    .searchIcon, .giftIcon, .bellIcon{
      width: 20px;
      margin-right: 10px;
    }
  }
`

