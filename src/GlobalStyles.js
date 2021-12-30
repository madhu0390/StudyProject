import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 :root{
    --accent-color: #ff944d;
    --accent-color-active: #ff751a;
    --background-color: #333333;
    --list-container-background: #232323;
    --error-color: #ff4d4d;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  .App {
    text-align: center;  
  }
  @media (min-width: 768px) {
    .App {
      justify-content: center;
      padding: 0px;
      display: flex;
    }
  }
  .chart-container {
    position: relative;
    display: block;
  }
  @media (min-width:768px) {
    .chart-container {
      display: block;
    }
  }
  html {
    font-size: 62.5%;
  }

  body, textarea, input, button {
    color: var(--text-color);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
  .repo {
    margin-right: 15px;
    margin-bottom: 15px;
    color: #522bff;
    text-decoration: none;
    display: flex;
    justify-self: flex-end;
    align-self: flex-end;
    margin-top: 15px;
    float: right;
  }
  @media (min-width: 768px) {
    .repo {
      position: absolute;
      right: 0;
    }
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  .main {
    background-color: #fff;
    font-size: calc(10px + 2vmin);
    margin: 5px 15px;
    max-width: 965px;
    /* width: 100%; */
    /* padding: 28px 15px;
     */
    padding: 15px 10px;
    box-shadow: 3px 3px 0 0 rgba(85, 150, 246, 0.16);
    border-radius: 9px;
    margin-bottom: 20px;
  }
  
  @media (min-width: 768px) {
    .main {
      background-color: #fff;
      margin: 0 auto;
      margin: calc(15px + 10vw) 15px;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      max-width: 965px;
      padding: 38px 30px;
      box-shadow: 3px 3px 0 0 rgba(85, 150, 246, 0.16);
      border-radius: 9px;
    }
  }
  
  .main-inner {
    margin-top: 2rem;
    display: flex;
    /* flex-wrap: wrap; */
  }
  p {
    margin: 0;
  }
  h4 {
    margin: 0;
  }
  .bottom-info .col {
    font-size: 22px;
    color: #1c1c1c;
    letter-spacing: -0.75px;
    margin-top: 2rem;
  }
  .bottom-info h4 {
    font-weight: 400;
    font-size: 18px;
    color: #888888;
    letter-spacing: -0.62px;
    margin-bottom: 0.9rem;
  }
  
  .row {
    display: flex;
  }
  .col {
    flex: 0 0 50%;
  }
  
  .currentTime {
    font-size: 18px;
    color: #888888;
    letter-spacing: -0.62px;
  }
  .cityTitle {
    font-weight: 700;
    font-size: 24px;
    color: #1c1c1c;
    letter-spacing: -0.82px;
    line-height: 1;
  }
  .currentForecast {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  .temp-wrapper {
    display: flex;
    align-items: center;
  }
  .currentForecast img {
    margin-right: 1.5rem;
  }
  .currentForecast .deg {
    margin-top: 5px;
  }
  .currentForecast .sup {
    font-weight: 700;
    font-size: 20px;
    color: #1c1c1c;
    letter-spacing: -0.68px;
    margin-top: 6px;
  }
  .main-inner {
    display: flex;
    flex-wrap: wrap;
  }
  .left-widget {
    position: relative;
    width: 100%;
    margin-bottom: 22px;
  }
  @media (min-width: 768px) {
    .left-widget {
      flex: 0 0 30%;
      max-width: 30%;
      margin-bottom: 0px;
    }
  }
  .right-widget {
    position: relative;
    width: 100%;
  
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
  }
  .right-widget-inner {
    width: 100%;
  }
  @media (min-width: 768px) {
    .right-widget {
      flex: 0 0 70%;
      max-width: 572px;
    }
    .right-widget-inner {
      padding-left: 10%;
    }
  }
  
  .right-widget .day {
    font-weight: 700;
    font-size: 14px;
    color: #1c1c1c;
    letter-spacing: -0.48px;
    text-align: center;
  }
  .right-widget .humidity {
    font-size: 14px;
    color: #1c1c1c;
    letter-spacing: -0.48px;
    text-align: center;
  }
  
  .temp-big {
    font-weight: 700;
    font-size: 58px;
    color: #1c1c1c;
    letter-spacing: -1.98px;
  }
  .feelsLike {
    font-weight: 500;
    font-size: 21px;
    color: #1c1c1c;
    letter-spacing: 0;
    text-align: center;
  }
  .textForecast {
    font-weight: 700;
    font-size: 31px;
    color: #1c1c1c;
    letter-spacing: -1.06px;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
`
