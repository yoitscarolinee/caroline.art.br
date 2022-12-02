import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import config from '../public/config.json' assert {type: 'json'};
import styled from 'styled-components'
import Header from '../components/Header';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import SideInfo from '../components/SideInfo';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caroline Versiani</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Landing>

        <Header /> 

        <Logo>

          <Image
            src="/img/logo.svg"
            alt=""
            layout="fill"
            objectFit="contain"
            draggable="false"
          />

        </Logo>

        <SideInfoPos>
          <SideInfo />
        </SideInfoPos>

        <BottomImage>
          <Image
            src="/img/rocks.svg"
            alt=""
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </BottomImage>

        <Ocean>
          <Wave />
          <Wave />
          <Wave />
        </Ocean>

        <Sun />

      </Landing>

      <BioWrapper>



      </BioWrapper>

    </>
  )
}

export default Home

const BioWrapper = styled.div`
    width: 100vw;
    height: 500px;
    background-color: var(--main);
    position: relative;
    z-index: 3;
`;

const SideInfoPos = styled.div`
    position: absolute;
    right: 30px;
    bottom: 130px;
    user-select: none;
`;

const Sun = styled.div`
    width: 350px;
    height: 350px;
    background-color: var(--tertiary);
    border-radius: 100%;
    position: absolute;
    bottom: -80px;
    right: 100px;
    z-index: 1;

    @media only screen and (max-width: 900px) {
      display: none;
    }
`;

const Logo = styled.div`
    width: 400px;
    height: 150px;
    position: absolute;
    right: 450px;
    top: 45%;
    transform: translateY(-50%);
    user-select: none;

    @media only screen and (max-width: 1300px) {
      right: 50%;
      top: 35%;
      transform: translateX(50%);
    }

    @media only screen and (max-width: 600px) {
      width: 250px;
      top: 20%;
    }
`;

const Wave = styled.div`
    width: 100vw;
    height: 100px;
    position: absolute;
    bottom: 50px;
    background: url("/img/wave.svg");
    background-size: 300px 100px;
    animation: animate 10s linear infinite;
    z-index: 2;

    @keyframes animate {
      0% {
        background-position-x: 0;
        background-position-y: 0px;
      }
      50%{
        background-position-y: 10px;
      }
      100% {
        background-position-y: 0px;
        background-position-x: 300px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100px;
      bottom: -65px;
      background-color: var(--main);
    }

    &:nth-child(2) {
      animation: animate 5s linear infinite;
      opacity: 0.5;
      bottom: 42px
    }
    &:nth-child(3) {
      animation: animate 15s linear infinite;
      opacity: 0.3;
      animation-direction: reverse;
      bottom: 60px
    }
`;

const Ocean = styled.div`
    width: 100vw;
    height: 100px;
    position: absolute;
    bottom: 0;
`;

const BottomImage = styled.div`
    width: 450px;
    height: 455px;
    position: absolute;
    bottom: 0;
    user-select: none;
    
    @media only screen and (max-width: 600px) {
      width: 250px;
      height: 250px;
      bottom: 50px;
    }
`;

const Landing = styled.section`
    width: 100vw;
    height: 100vh;
`;  
