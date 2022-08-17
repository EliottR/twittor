import styled from "styled-components"

export const MainContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
`

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 2rem 2rem 0 0;
  position: relative;
`

export const InterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
  }
`

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  border: 1px solid #a9a9a9;
  background: none;
  border-radius: 2rem;
  font-weight: bold;
`

export const Line = styled.span`
  position: absolute;
  background-color: #ededed;
  width: 2rem;
  height: 0.25rem;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 0.5rem;
  border-radius: 1rem;
`
