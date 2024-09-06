import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=>{
                        handleImageClick(i)
                    }} key={i}>
                        <img 
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt="" 
                        />
                    </div>
                })}
            </div>
        </GalleryStyled>
    )
}


const GalleryStyled = styled.div`
  background-color: #e0e0e0; /* Light background for consistency */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Ensure that positioning is relative for absolute elements */

  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;

    a {
      font-weight: 600;
      text-decoration: none;
      color: #eb5757;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #ff4081; /* Change color on hover */
      }
    }
  }

  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 10px;
    border: 5px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      border-radius: 15px;
      border: 5px solid #ff4081; /* Animated border color */
      z-index: 1;
      animation: borderAnimation 2s linear infinite;
    }

    img {
      width: 350px;
      border-radius: 7px;
    }
  }

  .small-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 10px;
    background-color: #fff;
    border: 5px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
      border-radius: 15px;
      border: 5px solid #ff4081; /* Animated border color */
      z-index: 1;
      animation: borderAnimation 2s linear infinite;
    }

    img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      cursor: pointer;
      border-radius: 5px;
      border: 3px solid transparent;
      transition: border-color 0.3s ease;

      &:hover {
        border-color: #ff4081; /* Change border color on hover */
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

export default Gallery