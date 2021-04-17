import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';
import Stage1 from '../images/mountain_stage_1.svg';


// greeting
function getStateOfDay() {
    const hourHand = new Date().getHours();
    if (0 <= hourHand && hourHand <= 11) {
        return ("Morning");
    } else if (12 <= hourHand && hourHand <= 16) {
        return ("Afternoon");
    } else {
        return ("Evening");
    }
}

function Home() {

    return (
        <>
        <Container>
        <TopBarContainer>
            {/* <TopBarWrapper>

            <TestMascot />
            <TopBarContent>
                <GreetingText>Good {getStateOfDay()},</GreetingText>
                <TopBarTextContent>Nami</TopBarTextContent>
            </TopBarContent>

            </TopBarWrapper> */}
        </TopBarContainer>

        {/* <HeroImageContainer>
        <HeroImage src={Stage1} type='image/svg' />
        </HeroImageContainer> */}

        
        <BottomBar />
        
        </Container>
        </>
    );
}

export default Home;



const Container = styled.div `
position: fixed;
display: flex;
background-image: linear-gradient(to bottom, #2dede9, #28f0ed, #23f3f1, #1df5f5, #14f8f9, #4af9fb, #67f9fd, #7dfaff, #a8f9ff, #d3f8ff, #f1f9ff, #ffffff);
width: 100%;
height: 100vh;
font-family: 'Baloo 2', cursive;
justify-content: center;
`;


const TopBarContainer = styled.div `
    height: 15%;
    width: 100%;
    background: #000;
`;



const TopBarWrapper = styled.div `
position: relative;
z-index: 9;
width: 100%;
height: 10%;
justify-content: center;
align-items: center;
display: flex;
`;


const TopBarContent = styled.div `
display: flex;
flex-direction: column;
margin-top: 20%;
margin-left: 25px;
`;

const TopBarTextContent = styled.h1 `
    font-size: 100px;
`;

const GreetingText = styled.small `
z-index: 10;
font-size: 32px;
margin-bottom: -15%;
margin-top: 15%;
`;

const TestMascot = styled.div `
position: relative;
height: 150px;
width: 150px;
background: #ddd;
border-radius: 50%;
margin-top: 20%;
`;


const HeroImageContainer = styled.div `
position: relative;
width: 100%;
height: 90vh;
margin-top: 60%;
`;

const HeroImage = styled.img `
position: absolute;
max-width: 100%;
max-height: 100%;
margin-left: -9%;
`;


const BottomBar = styled.div `
height: 150px;
width: 100%;
background: #000;
position: absolute;
bottom: 0;
left: 0;
right: 0;
`;

const BottomBarWrapper = styled.div `
position: relative;
height: 10%;
width: 100%;
bottom: 0;

`;

