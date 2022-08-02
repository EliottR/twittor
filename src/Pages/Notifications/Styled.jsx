import styled from "styled-components"

export const Container = styled.div`
  height: ${(props) => `calc(100vh - 3.5rem - ${props.height}px)`};
`
