import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
// import "./styles.css";

function Login() {

const [loading, setLoading] = useState(true)

useEffect(() => {
    setTimeout(() => setLoading(false),  500)
    }, [])


    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleFormChange = e => {
    const { name, value } = e.target
    setLoginData({
        ...loginData,
        [name]: value
    });
}   

  const handleSubmit = e => {
      e.preventDefault();
  };

  console.log(loginData);


  return (
    <Container>
    
    {loading === false ?
    <>
    <CompanyLogo>
      MiMedi
    </CompanyLogo>

    <FormContainer>

      {/* <FormWrap> */}

            <FormContent>

                <Form onSubmit={handleSubmit}>
      
                    <FormH1>Sign In</FormH1>

                          <FormInput
                            value={loginData.email}
                            onChange={handleFormChange}
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                            autoComplete="off"
                        />

                        <FormInput
                            value={loginData.password}
                            onChange={handleFormChange}
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            autoComplete="off"
                        />

                       
                        <FormButton onMouseEnter={onHover} onMouseLeave={onHover} type='submit' to='/home'>Sign Mi In {hover ? <ArrowForward /> : <ArrowRight /> }</FormButton>
                        <Text to='/sign-up'>New? <u>Create an Account!</u></Text> 
                </Form>

            </FormContent> 

        {/* </FormWrap> */}

    </FormContainer>

    </>
    :
    <h1>Load Screen</h1>
    }
    
    </Container>

    
  );
};

export default Login;





// styles
const Container = styled.div `
position: relative;
background-image: linear-gradient(to left top, #434997, #295fa6, #0573b0, #0285b4, #2b96b6, #30a1b9, #3cacbb, #4bb7bc, #42c0bd, #3ec9bb, #41d1b6, #4cd9af);
width: 100%;
height: 100vh;
font-family: 'Baloo 2', cursive;
justify-content: center;
`;


const CompanyLogo = styled.h1 `
font-size: 150px;
color: white;
position: relative;
top: 10%;
margin-left: 25%;

`;


const FormContainer = styled.div`
    position: relative;
    height: 60%;
    width: 85%;
    display: flex;
    margin: 35% auto;
    
    ${'' /* bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0; */}
    ${'' /* overflow: hidden; */}
    ${'' /* padding-top: 6%; */}
    ${'' /* background: #f07167; */}
    font-family: 'Baloo 2', cursive;
    
`;


// const FormWrap = styled.div`
//     height: 100%;
//     background: blue;
//     width: 250px;
//     display: flex; 
//     flex-direction: column;
//     justify-content: center;
// `;



// const Icon = styled(Link)`
//     margin-left: 32px;
//     margin-top: 32px;
//     text-decoration: none;
//     color: #fff;
//     font-weight: 700;
//     font-size: 32px;

//     @media screen and (max-width: 400px) {
//         margin-left: 16px;
//         margin-top: 8px;
//     }
// `;



const FormContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    ${'' /* background: blue; */}

    ${'' /* flex-direction: column; */}
    
    ${'' /* @media screen and (max-width: 480px) {
        padding: 10px;
    } */}
`;


const Form = styled.div`
    background: rgb(255,255,255,0.3);
    width: 100%;
    height: 100%;
    ${'' /* height: auto; */}
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 30px;
    border-radius: 4px;
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.9); */}

    ${'' /* @media screen and (max-width: 400px) {
        padding: 32px 32px;
    } */}
`;


const FormH1 = styled.h1`
    margin-top: 10%;
    margin-bottom: 40px;
    color: #fff;
    font-size: 128px;
    font-weight: 400;
    text-align: center;
`;


const FormInput = styled.input`
    padding: 16px 30px;
    ${'' /* margin-bottom: 10%; */}
    margin: 0 5% 10% 5%;
    font-size: 64px;
    border: none;
    border-radius: 16px;
    ${'' /* border-radius: 8px; */}
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;

`;


const FormButton = styled.button`   
    margin: -20px 5% 0 5%;
    position: relative;
    background: #3E3EDC;
    ${'' /* background: #50DF60; */}
    border-radius: 50px;
    ${'' /* background: #f07167; */}
    white-space: nowrap;
    padding: 14px 48px;
    color: #FFF;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 64px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        ${'' /* background: #1D39AD; */}
        background: #9ede73;
    }

`;



const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 64px;
    
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 64px;
`;

const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 40px;
    text-decoration: none;

`;






