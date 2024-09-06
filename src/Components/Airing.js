import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import styled from 'styled-components'
import Sidebar from './Sidebar'

function Airing({rendered}) {
    const {airingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'airing'){
            return airingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                </Link>
            })
        }
    }

    return (
        <PopularStyled>
            <div className="airing-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
  display: flex;
  background-color: #f0f0f5; /* Light background for consistency */

  .airing-anime {
    margin-top: 2rem;
    padding: 2rem 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #f0f0f5; /* Slight color change for background contrast */
    border-top: 5px solid #e5e7eb;

    a {
      position: relative;
      height: 500px;
      border-radius: 10px;
      border: 5px solid transparent;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: firework 1s ease-out;

      &:hover {
        transform: scale(1.08); /* Make the hover effect more pronounced */
        border-color: #ff4081; /* A more vibrant pinkish border */
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); /* Stronger shadow effect */
      }

      &:active {
        animation: firework 1s ease-out, rotateBackground 2s linear; /* Add background rotation animation */
      }

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 15px;
        border: 5px solid transparent;
        border-top-color: #ff4081; /* Starting color of the animated border */
        transition: border-color 0.3s ease;
        z-index: 1;
        animation: borderAnimation 2s linear infinite;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: filter 0.3s ease, transform 0.3s ease;

        &:hover {
          filter: brightness(80%); /* Slightly darken on hover */
          transform: scale(1.02); /* Zoom-in effect on image hover */
        }
      }

      .anime-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        transition: background 0.3s ease;
      }
    }
  }

  /* Add some hover effects to the anime title */
  a:hover .anime-title {
    background: linear-gradient(to top, rgba(255, 64, 129, 0.9), transparent); /* Pinkish gradient */
  }

  @keyframes firework {
    0% {
      transform: scale(1);
      background: #fff;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    50% {
      transform: scale(1.1);
      background: radial-gradient(circle, rgba(255, 69, 0, 0.5), transparent);
      box-shadow: 0 0 20px rgba(255, 64, 129, 0.7);
    }
    100% {
      transform: scale(1);
      background: #fff;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
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

  @keyframes rotateBackground {
    0% {
      background: radial-gradient(circle, #ff4081, #ff4081 30%, transparent 30%, transparent 60%, #ff4081 60%, #ff4081);
      background-position: 0% 0%;
    }
    100% {
      background: radial-gradient(circle, #ff4081, #ff4081 30%, transparent 30%, transparent 60%, #ff4081 60%, #ff4081);
      background-position: 100% 100%;
    }
  }
`;

export default Airing