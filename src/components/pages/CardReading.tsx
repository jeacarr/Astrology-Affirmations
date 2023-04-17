import { getThreeCardReading } from '@/state/data/tarotCard/TarotCardSelector';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { TarotCard } from '../../state/data/tarotCard/TarotCard';
import { RootState } from '../../state/rootReducer';
import { FetchThreeCardReadingCreator } from '../../state/data/tarotCard/TarotCardActions';
import { Card } from '../layout/Card';
import React from 'react';
import {Map} from "immutable"
import styled from 'styled-components';
interface Props{
    reading: Map<number,TarotCard>;
}

const CardReading: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const [card, setCard] = React.useState("")
    
    useEffect(() => {
        dispatch(FetchThreeCardReadingCreator());
    },[dispatch])

    function handleChange(card: TarotCard) {
        card.upright ? setCard(card.desc): setCard(card.rdesc);
      }
 
    return (
        <>
            <ReadingContainer>
                {props.reading.entrySeq().map(([key, value]) => 
                    <Card 
                        reading={value}     
                        tarot={0}
                        key={key}
                        displayDescription={handleChange}
                    />
                )}
                <h3>{card}</h3>
            </ReadingContainer>
           
        </>
    )
};

const ReadingContainer = styled.div `
    margin: auto;
    width:"1500px";
    display: block;

`;

const mapStateToProps = (state: RootState): Props => {
    return {
        reading: getThreeCardReading(state),
    }
};
export default connect(mapStateToProps)(CardReading);