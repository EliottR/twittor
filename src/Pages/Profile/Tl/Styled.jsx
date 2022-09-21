import styled from "styled-components"

export const Container = styled.div`
  /* margin-top: 3.5rem; */
  overflow: scroll;
  height: ${(props) =>
    `calc(100vh - ${props.height}px - ${props.heightMain}px)`};
  /* background-color: red; */
`
