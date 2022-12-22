import React from 'react';
import Link from "next/link";
import styled from 'styled-components';
import Image from 'next/image';

const Namorado = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    let now = mm + '/' + dd + '/' + yyyy;

    let hoje = dd + '/' + mm + '/' + yyyy;


    const date1: any = new Date('11/01/2022');
    const date2: any = new Date(now);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


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
            <br /><br />
            <Subtitle>Estamos namorando a {diffDays} dias!</Subtitle><br />
            <SubText>01/11/2022 - {hoje}</SubText>
        </Wrapper>
    )
}

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
`;