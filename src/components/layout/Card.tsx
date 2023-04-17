import { Tarot, TarotImage } from "@/constants/TarotEnum";
import { TarotCard } from "@/state/data/tarotCard/TarotCard";
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import React from "react";

interface Props{
    reading: TarotCard;
    tarot: Tarot;
    key: number;
    displayDescription: (card: TarotCard) => void;
}

export const Card: React.FC<Props> = (props: Props) => {
    return (
        <Container onClick={() =>props.displayDescription(props.reading)}>
            <Image 
                src={"/images/tarotCards/CardBack.svg"}
                alt={props.reading.name}
                width={200}   
                height={400}
                style={{
                    borderRadius:"20px", 
                    transform: props.reading.upright ? "none" : "rotate(180deg)", 
                    boxShadow:"-4px -5px #575976",
                }}
            />
            <Header>{props.reading.name}</Header>
        </Container>
    )
}

const Container = styled.div`
    height: 600px;
    width: 200px;
    float: left;
    margin: 50px;
`
const Header = styled.h4`
    text-align: center;
`

