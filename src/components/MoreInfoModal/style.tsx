import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  z-index: 99999;
`

export const ModalContainer = styled.div`
  background: #181818;
  width: 100%;
  max-width: 700px;
  height: 100vh;
  border-radius: 5px;
  box-shadow: 0 0  60px rgba(0, 0, 0, 0.5);
  position: relative;

  .videoContainer{
    width: 100%;

    iframe{
      width: 100%;
      height: 400px;
      border: none;
    }
  }
`