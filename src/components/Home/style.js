import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const HomeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 52px;
  color: #334155;
`

export const HomePara = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #475569;
`

export const Image = styled.img`
  height: 350px;
  width: 90%;
  margin-top: 30px;
`

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 12px;
  padding-left: 20px;
  padding-bottom: 12px;
  padding-bottom: 20px;
  border-radius: 6px;
`

export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 45px;
  color: #2563eb;
`

export const Topic = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: #334155;
`

export default HomeContainer
