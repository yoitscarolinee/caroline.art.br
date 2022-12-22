import type { NextPage } from 'next'
import { useState } from 'react';
import styled from 'styled-components'
import RandomOrg from 'random-org';
import { GiPerspectiveDiceSixFacesFour } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';

const Nickgen: NextPage = () => {

    //link: https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=.carol&size=s
    const [message, setMessage] = useState('');
    const [nicks, setNicks] = useState([] as any);
    const [existents, setExistents] = useState([] as any);
    const [amount, setAmount] = useState(0);
    const [size, setSize] = useState(0);

    var random = new RandomOrg({ apiKey: `${process.env.RANDOM_API}` });

    const handleMessageChange = (event: any) => {
        // 👇️ access textarea value
        setMessage(event.target.value);
    };

    const handleAmountChange = (event: any) => {
        setAmount(event.target.value);
    }

    const handleSizeChange = (event: any) => {
        setSize(event.target.value)
    }

    const handleClick = (event: any) => {
        let arr = message.split("\n");
        console.table(arr);
        for (let i = 0; i < arr.length; i++) {
            const nick = arr[i];
            fetch(`https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=${nick}&size=s`)
                .then(function () {
                    setExistents((array: any) => [...array, `${nick}`])
                }).catch(function () {
                    setNicks((array: any) => [...array, `${nick}`])
                })

        }
    }

    const generateStrings = (event: any) => {
        random.generateStrings({ n: amount, length: size, characters: "abcdefghijklmnopqrstuvwxyz1234567890.,;:=+-", replacement: false })
            .then(function (result) {
                let arr = result.random.data
                let content = ''
                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    content = content + '\n' + element;
                }
                setMessage(message + content)
            })
    }


    return (

        <Wrapper>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <FormWrapper>
                    <Textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <ButtonsWrapper>
                        <div onClick={generateStrings}><GiPerspectiveDiceSixFacesFour /></div>
                        <input type="number" value={size} onChange={handleSizeChange} />
                        <input type="number" value={amount} onChange={handleAmountChange} />
                        <div onClick={handleClick}><FaCheck /></div>
                    </ButtonsWrapper>
                </FormWrapper>
                <br />
                <br />
                <div>

                        <div>
                            {nicks.map((nick: any) => (
                                <ResultadoWrapper key={nick}>
                                    <Bolinha invalid={false} /><p>{nick}</p>
                                </ResultadoWrapper>
                            ))}
                        </div>
                        <div>
                            {existents.map((existent: any) => (
                                <ResultadoWrapper key={existent}>
                                    <Bolinha invalid={true} /><p>{existent}</p>
                                </ResultadoWrapper>
                            ))}
                        </div>
                </div>
            </IconContext.Provider>
        </Wrapper>
    );
};
export default Nickgen

interface Bolinha {
    invalid: boolean
}

const Bolinha = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${(p: Bolinha) => p.invalid ? '#EB5E28' : '#31B755'};
    border-radius: 50%;
`

const ResultadoWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 15px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 5px;
    padding: 15px 50px;
    border-radius: 10px;
    font-weight: 600;
    color: #403D39;
    background-color: rgba(64,61,57, 0.2);

`;

const ButtonsWrapper = styled.div`
width: 400px;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
    
    & input {
        width: 80px;
        height: 100%;
        background-color: rgba(64,61,57, 0.2);
        border: none;
        border-radius: 5px;
        padding: 0 15px;
    }

    & div {
        width: 80px;
        height: 100%;
        background-color: #403D39;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 300ms;
        cursor: pointer;
    }

    & div:hover {
        background-color: #EB5E28;
    }

    & div .react-icons {
        vertical-align: center;
        color: #CCC5B9;
        font-size: 1.7em;
        transition: 300ms;
    }

    & div:last-child {
        background-color: #EB5E28;
        border: 2px solid transparent;
    }

    & div:last-child:hover {
        background-color: transparent;
        border: 2px solid #EB5E28;
    }

    & div:last-child:hover .react-icons {
        color: #EB5E28;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const Textarea = styled.textarea`
    resize: none;
    width: 400px;
    height: 500px;
    font-family: 'Montserrat', sans-serif;
    background-color: rgba(64,61,57, 0.2);
    border: none;
    border-radius: 10px;
    padding: 15px 15px;
`;

const Wrapper = styled.div`
    width: 100vw;
    padding: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #CCC5B9 !important;
`;