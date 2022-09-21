import styled from "styled-components"

export const Intro = styled.p`
  font-weight: bold;
  font-size: 1.75rem;
  padding: 0 2rem;
  margin-top: 2rem;
`

export const Input = styled.input`
  text-decoration: none;
  border: none;
  height: 2rem;
  width: calc(100% - 4rem);
  margin: 0 2rem;
  margin-top: 2rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  border-bottom: 1px solid gray;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  position: absolute;
  bottom: 2rem;
  width: calc(100% - 4rem);
`

export const Continue = styled.button`
  text-decoration: none;
  border: none;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`
