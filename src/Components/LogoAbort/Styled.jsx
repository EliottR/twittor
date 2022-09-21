import styled from "styled-components"

export const TopContainer = styled.div`
  width: 100vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  z-index: 0;
`

export const Logo = styled.img`
  width: 2rem;
  height: 100%;
  order: 2;
`

export const Abort = styled.div`
  z-index: 10;
  position: absolute;
  order: 1;
  left: 1rem;
`
