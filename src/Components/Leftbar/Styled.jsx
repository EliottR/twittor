import styled from "styled-components"
export const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`

export const TopContainer = styled.div``

export const NavContainer = styled.div`
  font-size: 2.25rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 2rem 1.5rem;
  border-top: 0.25px solid gray;
`

export const TopUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 2rem;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 4rem;
    border-radius: 50%;
  }
`

export const UsernameContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 1rem;
`

export const UserIdContainer = styled.div`
  color: gray;
  font-size: 1.25rem;
  margin-top: 0.25rem;
`

export const FollowContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  text-transform: capitalize;
  color: gray;
  margin-top: 1rem;

  span {
    font-weight: 600;
    color: black;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 2rem;
  padding: 1rem 1.5rem;
  align-items: center;
  font-size: 1.25rem;
`

// export const Shadow = styled.div`
//   background-color: #0000003e;
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 0;
//   /* display: none; */
// `
