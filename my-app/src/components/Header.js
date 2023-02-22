import { GrWifiMedium } from "react-icons/gr";
import {FaBatteryFull} from 'react-icons/fa';
import { RiRotateLockFill } from "react-icons/ri";
import {FaBolt} from 'react-icons/fa';
import styled from 'styled-components';
const Styledspan = styled.span`
    display: flex;
    justify-content: space-between;
    font-size: 35px;
`;
function Header() {

    return(
        <div>
            <Styledspan>
            <span>No Service
            <GrWifiMedium/></span>
            <span>21:23</span>
            <span>
            <RiRotateLockFill/>
            100%
            <FaBatteryFull/>
            <FaBolt/>
            </span>
            </Styledspan>
        </div>
    )
}

export default Header;