import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledTitleDiv =styled.div`
    margin: 50px 0px; 
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    .title{
        margin-bottom: 20px;
        font-size: 30px;
    }
    .subtitle{
        width: 60%;
        opacity: 0.8;
        font-size: 22px;
    }
    .logininput{
        text-decoration: underline;
        text-underline-offset : 10px;
        padding-bottom: 20px;
    }
`;

const StyledProfileDiv = styled.div`
    width: 90%;
    border-bottom: 1px solid gray;
    padding-bottom: 40px;
    margin-bottom: 20px;
    font-size: 22px;
    color: gray;
    margin-left: 5%;
`;
const StyledButton = styled.button`
    border: none;
    background-color: #f9f9fa;
    color: black;
    display: flex;
    width: 90%;
    height: 50px;
    margin-left: 5%;
    font-size: 22px;
    margin-bottom: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

function Main() {
    return(
        <div>
            <StyledTitleDiv>
                <div className='title'>Welcome to KakaoTalk</div>
                <div className='subtitle'>If you have a Kakao Account,</div>
                <div className='subtitle'>log in with your email or phone number.</div>
            </StyledTitleDiv>
            <StyledProfileDiv>Email or phone number</StyledProfileDiv>
            <StyledProfileDiv>Password</StyledProfileDiv>
                <nav><Link to ="/login"><StyledButton>Log In</StyledButton></Link></nav>
            <StyledButton>Sign Up</StyledButton>
            <div style={{textAlign: 'center'}}>Find Kakao Account or Password</div>          
        </div>
    )

}
export default Main;