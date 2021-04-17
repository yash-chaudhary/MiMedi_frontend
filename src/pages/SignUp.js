import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
// import "./styles.css";

function SignUp() {

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    age:'',
    sex:'',
    email: '',
    password: ''
  });

  const handleFormChange = e => {
    const { name, value } = e.target
    setRegisterData({
        ...registerData,
        [name]: value
    });
}   


const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


  const handleSubmit = e => {
      e.preventDefault();
  };

  console.log(registerData);

  return (

    <Container>

    <CompanyLogo>
      MiMedi
    </CompanyLogo>

    <FormContainer>

    
    <FormWrap>
    <Form onSubmit={handleSubmit}>

    <FormH1>
      Sign Up
    </FormH1>
    <FormGroup>
      <FormInput
        value={registerData.firstName}
        onChange={handleFormChange}
        placeholder="Firstname"
        type="text"
        name="firstName"
        required
        autoComplete="off"
      />

      
      <FormInput
        value={registerData.lastName}
        onChange={handleFormChange}
        placeholder="Lastname"
        type="text"
        name="lastName"
        required
        autoComplete="off"
      />

      </FormGroup>  

      <FormGroup>
      <FormSelect name="sex" value={registerData.sex} onChange={handleFormChange}>
        <option value="" disabled selected>Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="not-specified">Prefer not to specify</option>
      </FormSelect>

      <FormInputAge type="date" name="age" value={registerData.age} onChange={handleFormChange} />

      </FormGroup>

      <FormInput
        value={registerData.email}
        onChange={handleFormChange}
        placeholder="Email"
        type="email"
        name="email"
        required
        autoComplete="off"
      />
      <FormInput
        value={registerData.password}
        onChange={handleFormChange}
        placeholder="Password"
        type="password"
        name="password"
        required
        autoComplete="off"
      />

<FormButton onMouseEnter={onHover} onMouseLeave={onHover} type='submit' to='/home'>Get Mi Started {hover ? <ArrowForward /> : <ArrowRight /> }</FormButton>
      <Text to='/'>Already have an account? <u>Sign In!</u></Text>
    </Form>
    </FormWrap>   
    </FormContainer>
    </Container>
  );
};

export default SignUp;






const Container = styled.div `
position: relative;
display: flex;
background-image: linear-gradient(to left top, #434997, #295fa6, #0573b0, #0285b4, #2b96b6, #30a1b9, #3cacbb, #4bb7bc, #42c0bd, #3ec9bb, #41d1b6, #4cd9af);
width: 100%;
height: 100vh;
font-family: 'Baloo 2', cursive;
justify-content: center;
`;


const CompanyLogo = styled.h1 `
align-self: start;
margin-top: 8%;
font-size: 64px;
color: white;
`;


const FormContainer = styled.div`
    min-height: 692px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    padding-top: 6%;
    ${'' /* background: #f07167; */}
    font-family: 'Baloo 2', cursive;
    
`;


const FormWrap = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;



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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;



const Form = styled.div`
    background: rgb(255,255,255,0.3);
    max-width: 375px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 15% auto 0 auto;
    padding: 20px 30px 80px 30px;
    border-radius: 4px;
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.9); */}

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;


const FormGroup = styled.div `
display: flex;
flex-direction: row;
justify-content: center;

`;


const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
`;



// const FormLabel = styled.label`
//     margin-bottom: 8px;
//     font-size: 20px;
//     color: #fff;
// `;


const FormInput = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
`;

const FormInputAge = styled.input`
    padding: 16px 16px;
    margin: 0 5px 20px 5px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    margin-right: 2px;

`;

const FormSelect = styled.select `
padding: 16px 16px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    margin-right: 10px;

`;


const FormButton = styled.button`   
    margin-top: 10px;
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

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        ${'' /* background: #1D39AD; */}
        background: #72dc57;
    }

`;



const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
    
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 24px;
`;

const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
`;