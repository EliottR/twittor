import styled from "styled-components"

export const MainContainer = styled.div`
  height: fit-content;
  border-bottom: 0.5px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 1rem 1rem 1rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 0.25rem;
`

export const ImgUser = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
`

export const UserContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  div:first-child {
    font-weight: bold;
  }
`

export const DateTime = styled.div`
  flex-grow: 1;
`

export const InterContainer = styled.div`
  display: flex;
  width: 80%;
  flex-grow: 1;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const RTContainer = styled.div`
  color: ${(props) => (props.rt ? "green" : "black")};
`

export const FavContainer = styled.div`
  color: ${(props) => (props.fav ? "#f9197f" : "black")};
`

export const HasRt = styled.div`
  margin-left: 3rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: gray;
`
