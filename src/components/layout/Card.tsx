import { Tarot, TarotImage } from "@/constants/TarotEnum";
import { TarotCard } from "@/state/data/tarotCard/TarotCard";
import styled from 'styled-components'
import Image from 'next/image'

interface Props{
    reading: TarotCard;
    tarot: Tarot;
}

export const Card: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Image 
                loader={undefined}
                src={TarotImage[props.tarot]}
                alt={props.reading.name}
                width={200}   
                height={400}
                style={{borderRadius:"10px", 
                    transform: props.reading.upright ? "none" : "rotate(180deg)"}}
            />
            <h4>{props.reading.name}</h4>
        </div>
    )
}