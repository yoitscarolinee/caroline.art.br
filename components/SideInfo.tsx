import React from 'react';
import Link from "next/link";
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const SideInfo = () => {
    return (
        <IconContext.Provider value={{ color: "var(--main)", size: "2em", className: "linkIcon" }}>
            <Wrapper>

                <Socials>

                    <Link href="https://github.com/yoitscarolinee">
                        <FaGithubSquare />
                    </Link>
                    <Link href="https://www.linkedin.com/in/caroline-batista-versiani-30a1b8225/">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://twitter.com/yooitscarol">
                        <FaTwitterSquare />
                    </Link>

                </Socials>

                <Divisor />

                <p>©/2022</p>

            </Wrapper>
        </IconContext.Provider>
    )
}

export default SideInfo;


const Divisor = styled.div`
    height: 100px;
    border-left: 1px solid var(--main);
    background-color: transparent;
`;

const Socials = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 30px;
    height: 250px;
    color: var(--main);
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    & p {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
`;