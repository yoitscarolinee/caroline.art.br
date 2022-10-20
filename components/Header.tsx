import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <Nav>
                <ul>
                    <Link href="/about">
                        <li>ABOUT</li>
                    </Link>

                    <Link href="/work">
                        <li>WORK</li>
                    </Link>

                    <Link href="/blog">
                        <li>BLOG</li>
                    </Link>

                    <Link href="/contact">
                        <li>CONTACT</li>
                    </Link>
                </ul>
            </Nav>

        
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.section`
    width: 100vw;
    height: 70px;
    padding: 0 100px;
`;

const Nav = styled.div`
    width: 25vw;
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    color: var(--main);
    font-size: 11px;

    & ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & li {
        transition: 300ms;
        cursor: pointer;
    }

    & li:hover {
        color: var(--tertiary);
    }
`;