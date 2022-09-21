import styled from "styled-components"

export const MainContainer = styled.div``

export const Banner = styled.img`
  width: 100vw;
  height: 8rem;
  object-fit: cover;
`

export const NoBanner = styled.div`
  width: 100vw;
  height: 8rem;
  background-color: gray;
`

export const TextContainer = styled.div`
  margin: 0 1rem;
`

export const SubContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2.5rem;
`

export const ImgUser = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0.25rem solid white;
`

export const EditButton = styled.button`
  text-decoration: none;
  border: 1px solid #0000002b;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: white;
  font-weight: bold;
  margin-top: 2rem;
`

export const Username = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`

export const UserId = styled.div`
  color: gray;
`

export const Location = styled.div``
export const Link = styled.a`
  color: blue;
  text-decoration: none;
`

export const Details1 = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  font-size: 0.9rem;
  color: gray;
`

export const Details2 = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: gray;
`

export const FollowContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const Follow = styled.div`
  color: gray;
  span {
    font-weight: bold;
    color: black;
  }
`
