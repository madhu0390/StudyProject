import styled from "styled-components";

export const Container = styled.div`
max-width:100%;
margin:50px 0;
text-align: center;
`

export const TabContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
flex: 0 0 25%;
color: #fff;
padding-top: 10px;
padding-bottom: 10px;
margin-top: 20px;
@media (min-width: 768px) {
      padding-top: 30px;
      padding-bottom: 30px;
      margin-top: 10px;
  }
`

export const TabItem = styled.div`
  flex: 0 0 25%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 0;
  color: #fff;
  padding: 0;
  background-image:${({bi})=> bi ? 'linear-gradient(180deg, #522bff 0%, #890eff 100%)' : "white"};
  border-radius: ${({br})=>  br+'px'|| '0px'};
  @media (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 10px;
}
`

export const TabItemHeading = styled.div`
font-weight: 700;
font-size: 14px;
color:${({color})=>color};
letter-spacing: -0.48px;
text-align: center;
}`  

export const TabItemBottom = styled.div`
font-size: 14px;
color:${({color})=>color};
  letter-spacing: -0.48px;
  text-align: center;
}` 