import React from 'react'
import { useGlobalContext } from '../context/global'
import Popular from './Popular'
import styled from 'styled-components'
import Upcoming from './Upcoming'
import Airing from './Airing'

function Homepage() {

    const {handleSubmit, 
        search, 
        searchAnime,
        handleChange ,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext()

    const [rendered, setRendered] = React.useState('popular')

    const switchComponent = () => {
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered} />
            case 'airing':
                return <Airing rendered={rendered} />
            case 'upcoming':
                return <Upcoming rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' : 
                        rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={() => {
                            setRendered('airing')
                            getAiringAnime()
                        }}>Airing</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={() => {
                            setRendered('upcoming')
                            getUpcomingAnime()
                        }}>Upcoming</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled >
    )
}

const HomepageStyled = styled.div`
  background-color: #e0e0e0; /* Light background for consistency */
  min-height: 100vh;
  
  header {
    padding: 2rem 5rem;
    width: 60%;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;
    position: relative; /* Ensure that positioning is relative for absolute elements */
    
    @media screen and (max-width: 1530px) {
      width: 95%;
    }
    
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1.5rem;
        outline: none;
        border-radius: 30px;
        font-size: 1.2rem;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        font-family: inherit;
        border: 5px solid transparent;
        position: relative;
        overflow: hidden;
        background: #fff;
        background-size: 200% 200%; /* To handle background animation */

        &:hover {
          background: linear-gradient(45deg, #ff4081, #27ae60);
          color: #fff;
          border-color: transparent;
          transform: scale(1.05); /* Slightly scale up on hover */
        }
        
        &::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border-radius: 35px;
          border: 5px solid #ff4081; /* Animated border color */
          z-index: 1;
          animation: borderAnimation 2s linear infinite;
        }
      }

      form {
        position: relative;
        width: 100%;

        .input-control {
          position: relative;
          transition: all 0.4s ease-in-out;
          
          input {
            width: 100%;
            padding: 0.7rem 1rem;
            border: none;
            outline: none;
            border-radius: 30px;
            font-size: 1.2rem;
            background-color: #fff;
            border: 5px solid transparent;
            transition: all 0.4s ease-in-out;
            
            &:focus {
              border-color: #ff4081; /* Change border color on focus */
            }
          }
          
          button {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;
            color: #ff4081;
            transition: color 0.3s ease;

            &:hover {
              color: #27ae60;
            }
          }
        }
      }
    }
  }
  
  @keyframes borderAnimation {
    0% {
      border-top-color: #ff4081;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    25% {
      border-top-color: transparent;
      border-right-color: #ff4081;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    50% {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: #ff4081;
      border-left-color: transparent;
    }
    75% {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: #ff4081;
    }
    100% {
      border-top-color: #ff4081;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }
`;

export default Homepage