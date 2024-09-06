import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';


function Sidebar() {
    const {popularAnime} = useGlobalContext()

    const sorted = popularAnime?.sort((a,b) => {
        return b.score - a.score
    })

    return (
        <SidebarStyled>
            <h3>Top 5 Popular</h3>
            <div className="anime">
                {sorted?.slice(0,5).map((anime) => {
                    return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                        <h5>
                            {anime.title}
                        </h5>
                    </Link>
                })}
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
  margin-top: 2rem;
  background-color: #f0f0f5; /* Light background for consistency */
  border-top: 5px solid #e5e7eb;
  padding: 2rem 5rem 2rem 2rem;

  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;

    img {
      width: 100%;
      border-radius: 10px;
      border: 5px solid transparent;
      background: #fff;
      transition: border-color 0.3s ease, transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05); /* Slightly scale up on hover */
        border-color: #ff4081; /* Vibrant pink border */
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
    }

    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: .4rem;
      color: #27AE60;
      
      h4 {
        font-size: 1.1rem;
        background: linear-gradient(to right, #A855F7, #27AE60);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.4s ease-in-out;

        &:hover {
          transform: skew(-3deg); /* Skew effect on hover */
        }
      }
    }
  }

  @keyframes firework {
    0% {
      transform: scale(1);
      border-color: transparent;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    50% {
      transform: scale(1.1);
      border-color: #ff4081;
      box-shadow: 0 0 20px rgba(255, 64, 129, 0.7);
    }
    100% {
      transform: scale(1);
      border-color: transparent;
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

export default Sidebar