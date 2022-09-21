import styled from "styled-components"

export const LogoContainer = styled.div`
  width: 100vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const Logo = styled.img`
  width: 2rem;
  height: 100%;
`

export const Intro = styled.p`
  font-weight: bold;
  font-size: 2rem;
  padding: 0 2rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(50vh - 2rem);

  :not(:last-child) {
    justify-content: center;
  }
`

export const Button = styled.button`
  text-decoration: none;
  background-color: none;
  border: ${(props) => (props.black ? "none" : "1px solid #0000002b")};
  border-radius: 2rem;
  margin: 0 2rem;
  margin-bottom: 0.5rem;
  height: 3rem;
  background-color: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (props.black ? "white" : "black")};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`

export const SpaceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 0.25rem;
`

export const Line = styled.span`
  width: 100%;
  height: 1px;
  background-color: #0000002b;
`

export const Or = styled.p`
  color: gray;
  margin: 0 0.5rem;
  font-size: 0.75rem;
`

export const Conditions = styled.div`
  margin: 0 2rem;
  color: #000000aa;
  line-height: 1.5rem;

  a {
    color: blue;
    text-decoration: none;
  }
`

export const Connect = styled.div`
  color: #000000aa;
  margin: 0 2rem;
  margin-top: 3rem;

  div {
    color: blue;
    text-decoration: none;
  }
`
