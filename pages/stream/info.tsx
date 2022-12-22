import type { NextPage } from 'next'
import styled from 'styled-components'
import { FaSpotify, FaDiscord } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'
import { time } from 'console'

const Info: NextPage = () => {

    const [nowPlaying, setNowPlaying] = useState("")
    const [isListening, setIsListening] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let res = await fetch('https://api.lanyard.rest/v1/users/327396953157533696');
            let json = await res.json()
            setIsListening(json.data.listening_to_spotify)
            if (isListening) {
                setNowPlaying(json.data.spotify.artist.replaceAll(";", ", ") + " - " + json.data.spotify.song)
            }
        }
        timeout();
        function timeout() {
            setTimeout(() => {
                fetchData();
                timeout();
            }, 5000)
        }
    });

    return (
        <IconContext.Provider value={{ color: "#BA71E0", size: "1.5rem" }}>
            <Wrapper>
                <Item><FaSpotify /> {isListening ? nowPlaying : 'Não estou ouvindo nada no Spotify'}</Item>
                <Item><FaDiscord /> Carol#0002</Item>
            </Wrapper>
        </IconContext.Provider>
    )
}

export default Info

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #BA71E0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 600;
`;

const Wrapper = styled.div`
    width: 720px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 50px;
`;