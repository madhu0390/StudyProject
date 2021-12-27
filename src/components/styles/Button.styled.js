import styled from "styled-components";

export const Button = styled.button`
background: ${({bg})=> bg || '#000'};
appearance: none;
-webkit-appearance: none;
font-family: sans-serif;
cursor: pointer;
padding: 12px;
min-width: 100px;
border: 0px;
color: #ffffff;
margin-right:${({mr})=> mr+'px' || '0px'};
-webkit-transition: background-color 100ms linear;
-ms-transition: background-color 100ms linear;
 transition: background-color 100ms linear;
`

