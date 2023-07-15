import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styled from 'styled-components';
import Image from 'next/image';

const Namorado = () => {

    const [diffSeconds, setDiffSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date1 = new Date('11/01/2022');
            const date2 = new Date();
            const diffTime = Math.abs(date2.getTime() - date1.getTime());
            const seconds = Math.floor(diffTime / 1000);
            setDiffSeconds(seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const now = mm + '/' + dd + '/' + yyyy;
    const hoje = dd + '/' + mm + '/' + yyyy;

    const diffDays = Math.ceil(diffSeconds / (60 * 60 * 24));
    const diffMonths = Math.floor(diffSeconds / (60 * 60 * 24 * 31));

    return (
        <Wrapper>
            <FlexDiv>
                <Imagem>
                    <Image
                        src="/img/carol.jpeg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        draggable="false"
                    />
                </Imagem>
                <Imagem>
                    <Image
                        src="/img/coracao.jpeg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        draggable="false"
                    />
                </Imagem>
                <Imagem>
                    <Image
                        src="/img/drei.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        draggable="false"
                    />
                </Imagem>
            </FlexDiv>
            <Subtitle>Estamos namorando há {diffMonths} meses!</Subtitle>
            <div className="info">
                <p>ou {diffDays} dias</p>
                <p>que são {diffSeconds} segundos</p>
            </div>
            <SubText>01/11/2022 - {hoje}</SubText>
        </Wrapper>
    );
};

export default Namorado;

const SubText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
`;

const Imagem = styled.div`
    height: 250px;
    position: relative;
    width: 250px;
    
    & img {
        border-radius: 25px;
    }
`;

const Subtitle = styled.div`
    width: 100%;
    font-size: 24px;
    white-space: nowrap;
    text-align: center;
    font-weight: 700;
`;

const FlexDiv = styled.div`
    width: 80%;
    height: 250px;
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    & > .info {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;