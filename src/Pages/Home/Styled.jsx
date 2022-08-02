import styled from "styled-components"

export const Container = styled.div`
  margin-top: 3.5rem;
  overflow: scroll;
  height: ${(props) => `calc(100vh - 3.5rem - ${props.height}px)`};
`

export const MainContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
`
