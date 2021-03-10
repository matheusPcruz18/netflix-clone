import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  z-index: 99999;
  overflow-y: auto;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar {
  display: none;
}
`

export const ModalContainer = styled.div`
  background: #181818;
  width: 100%;
  max-width: 70%;
  height: 100vh;
  border-radius: 15px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  position: relative;
  transition: all ease 0.3s;
  border-radius: 5px;
  margin-top: 15px;

  @media (max-width: 760px){
    max-width: 100%;
    margin-top: 0;
  }
  

  .closeIcon{
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 1);;
    position: absolute;
    right: 30px;
    top: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    .icon{
      width: 100%;
      height: 100%;
    }

    @media (max-width: 760px){
      top: 10px;
      right: 10px;
    }
  }

  .videoContainer{
    width: 100%;

    img{
      width: 100%;
      height: 400px;
    }

    iframe{
      width: 100%;
      height: 400px;
      border: none;
    }
  }

  .information{
    display: inline-block;
    padding: 15px 15px;
    margin-top: -15px;
    line-height: 1;

    .name{
      width: 100%;
      font-size: 1.5rem;
      margin-top: 0px;
      padding-bottom: 10px;
    }

    .headerInfo{
      display: flex;
      margin-top: -15px;

      span{
        margin-right: 15px;
      }
      .points{
        color: #46d369;
        padding-bottom: 20px;
      }

      .description{
        width: 100%;
        color: #dbdbdb;
      }
    }
  }
`