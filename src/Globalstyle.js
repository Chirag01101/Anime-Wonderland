import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease; /* Smooth transitions for all elements */
  }

  body {
    color: #6c7983;
    font-size: 1.2rem;

    &::-webkit-scrollbar {
      width: 7px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #27AE60;
      border-radius: 10px;
      animation: colorChange 3s linear infinite; /* Animated color change */
    }
    
    &::-webkit-scrollbar-track {
      background-color: #EDEDED;
    }
  }

  @keyframes colorChange {
    0% {
      background-color: #27AE60;
    }
    50% {
      background-color: #A855F7; /* Transition to another color */
    }
    100% {
      background-color: #27AE60;
    }
  }
`;

export default GlobalStyle;