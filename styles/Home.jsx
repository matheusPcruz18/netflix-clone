import styled from 'styled-components'

export const HomeContainer = styled.div`
    .lists{
      margin-top: -128px;
    }

    footer{
      margin: 50px 0;
      text-align: center;
      font-size: 19px;
      line-height: 2;

      span{
        color: red;
      }
      a{

        :hover{
          color: #ccc;
        }
      }
    }

    .loading{
      position: fixed;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 99;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`