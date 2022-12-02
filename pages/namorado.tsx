import React from 'react';
import Link from "next/link";
import styled from 'styled-components';
import Image from 'next/image';

const Namorado = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    let now = mm + '/' + dd + '/' + yyyy;


    const date1: any = new Date('06/11/2022');
    const date2: any = new Date(now);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


    return (
        <Wrapper>

            <Title>Namorados!</Title>
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
                        src="/img/drei.jpeg"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        draggable="false"
                    />
                </Imagem>

            </FlexDiv>
            <Subtitle>Estamos namorando a {diffDays} dias!</Subtitle>
        </Wrapper>
    )
}

export default Namorado;

const Imagem = styled.div`
    height: 250px;
    position: relative;
    width: 250px;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
`;

const Subtitle = styled.div`
    font-size: 28px;
    font-weight: 700;
`;

const FlexDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
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