import styled from "styled-components"

export const Container = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  width: calc(100% - 2rem);
  background-color: white;
`

export const UserContainer = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`

export const LogoContainer = styled.img`
  width: 2rem;
  height: 2rem;
`
