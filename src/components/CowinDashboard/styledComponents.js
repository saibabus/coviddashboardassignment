// Style your elements here
import styled from 'styled-components/macro'

export const AppContianer = styled.div`
  background-color: #161625;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`

export const LogoTextCon = styled.div`
  display: flex;
  align-self: flex-start;
`
export const LogoText = styled.h1`
  color: #2cc6c6;
  margin-left: 5px;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`
export const Heading = styled.h1`
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  align-self: flex-start;
`
export const LogoStyles = styled.img`
  width: 25px;
`

export const FailureviewsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  height: 60%;
  width: 60%;
`
export const FailureHeaing = styled(Heading)`
  color: #ffffff;
  font-size: 20px;
  align-self: center;
`
export const SuccessViewCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
`
