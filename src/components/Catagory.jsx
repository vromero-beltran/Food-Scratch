import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from 'react'

function Catagory() {
    return (
        <List>
        <SLink to={"/cuisine/American"}>
            <div>
                <FaHamburger />
                <h4>American</h4>
            </div>
            </SLink>
            <SLink to={"/cuisine/Italian"}>
            <div>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </div>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
            <div>
                <GiNoodles />
                <h4>Thai</h4>
            </div>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
            <div>
                <GiChopsticks />
                <h4>Japanese</h4>
            </div>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    curser: pointer;
    transform: scale(0.9);

    h4 {
        color: white;
        font-size: 0.8remrem;
    }

    svg {
        font-size: 1.5rem;
        color: white;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }

    }
`

export default Catagory