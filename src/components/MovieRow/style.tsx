import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 0px;

  :hover{
    .arrow-left, .arrow-right{
      opacity: 1;
    }
  }

  .arrow-left, .arrow-right{
    position: absolute;
    width: 40px;
    height: 165px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    margin-top: 14px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    transition: all ease 0.3s;
  }
  .arrow-left{
    left: 0;
    z-index: 99;
  }
  .arrow-right{
    right: 0;
  }

    h2{
      margin: 0px 0px -10px 30px;
      font-size: 16px;;
      font-weight: 600;
    }

  @media (max-width: 760px){
    .arrow-left, .arrow-right{
      opacity: 1;
    }
  }
`

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 0px;
  margin-left: -20px;
  
  

  .list{
    display: flex;
    align-items: center;
    transition: all linear 0.5s;
    
  }

  .item{
    display: inline-block;
    width: 325px;
    margin-right: 5px;
    margin-right: -95px;
    z-index: 5;
    

    :hover{
      z-index: 6;
    }

    img{
      width: 100%;
      border-radius: 5px;
      transform: scale(0.70);
      transition: all ease 0.3s;
      cursor: pointer;
      

      :hover{
        transform: scale(0.84);
      }
    }
  }
` 