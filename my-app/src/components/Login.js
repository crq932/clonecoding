import React, { useState, useEffect } from 'react';
import {FaUser} from 'react-icons/fa';
import {FaCog} from 'react-icons/fa';
import {FaMusic} from 'react-icons/fa';
import {FaCommentMedical} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import { TfiMore } from "react-icons/tfi";
import {FaComment} from 'react-icons/fa';
import styled from 'styled-components';
import kaka from './kaka.png';
const Styledheaderspan = styled.span`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    #title{
        flex-grow: 8;
        font-size: 64px;
    }
    svg{
        flex-grow: 1;
        width: 50px;
        height: 50px;
    }
   
`;
const Styledfooterspan = styled.span`
    display: flex;
    justify-content: space-around;
    background-color:#f9f9fa;
    border:1px solid gray;
    #fauser{
        position: relative;
        width: 50px;
        height: 50px;
    }
    .facomment{
        position: relative;
        width: 50px;
        height: 50px;
    }
    #fasearch{
        position: relative;
        width: 50px;
        height: 50px;
    }
    #tfimore{
        position: relative;
        width: 50px;
        height: 50px;
    }
    .bigcircle{
        background-color:tomato;
        width:30px;
        height: 30px;  
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
       color:white;
       font-weight: 600;
       position:absolute;
       left: 540px;
    }
    .smallcircle{
        background-color:tomato;
        width:5px;
        height: 5px;  
        border-radius: 15px;
        justify-content: center;
        align-items: center;
       position:absolute;
       left:1260px;
       bottom:-30px;
    }
`;
const LoginMainContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 6fr 1fr;
`;
const LoginMainChats = styled.div`
    display: grid;
    grid-template-columns: 2fr 12fr 1fr;
    grid-template-rows: 50px 100px;
    .loginmaintitle{
        font-weight: 600;
        font-size: 33px;
    }

    .loginmaintime{
       color: gray;
       font-size: 22px;
    }
    .loginmainsubtitle{
        color: gray;
        font-size: 22px;
    } 
`;
const Bigcircle = styled.div`
    background-color:tomato;
    width:30px;
    height: 30px;  
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-weight: 600;
`;

const Spansdasd = styled(FaSearch)`
    background-color:tomato;
    width:30px;
    height: 30px;  
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-weight: 600;
`;

function LoginHeader()
{
    return(
        <div>
            <Styledheaderspan>
                <Spansdasd>Chats</Spansdasd>
                <FaSearch id="fasearch"/>
                <FaCommentMedical id="facommentmedical"/>
                <FaMusic id="famusic"/>
                <FaCog id="facog"/>
            </Styledheaderspan>
        </div>
    )
}
function LoginFooter()
{
    return(
    <div>
        <Styledfooterspan>
           <FaUser id="fauser"/>
           {/* <FaComment className="facomment"/> 
           <span className="bigcircle">1</span> */}
           <FaComment className="facomment"/ > 
           <span className="bigcircle">1</span>
           <FaSearch id="fasearch"/>
           <TfiMore id="tfimore"/>
           <span className="smallcircle"></span>
        </Styledfooterspan>
    </div>
    )
}

function LoginMain()
{
    return(
        <>
         <LoginMainChats>
            <img src={kaka}/>
            <div className='loginmaintitle'>KakaoTalk</div>
            <div className='loginmaintime'>21:22</div>
            <div></div>
            <div className='loginmainsubtitle'>Please check My Kakao Account Info</div>
            <Bigcircle>1</Bigcircle>
          </LoginMainChats>  
        </>
    )
}

function Login() {
 
    return(
        <div>
            <LoginMainContainer>
                <LoginHeader />
                <LoginMain />
                <LoginFooter />
            </LoginMainContainer>
        </div>
    )
}
 
export default Login;