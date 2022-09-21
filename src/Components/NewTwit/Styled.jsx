import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5rem;
  margin-top: 1rem;
`

export const Twit = styled.button`
  background-color: #279a90;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
`

export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
`

export const Container = styled.div`
  margin: 0 1.5rem;
  display: flex;
  gap: 0.5rem;
`

export const Input = styled.textarea`
  height: auto;
  width: 100%;
  height: 50vh;
  resize: none;
  font-family: Arial;
  border: none;
  font-size: 1rem;
  padding-top: 0.5rem;
  :focus {
    outline: none;
  }
`
