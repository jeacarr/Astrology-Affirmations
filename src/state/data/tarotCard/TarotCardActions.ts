import { TarotCardActionTypes as types } from "./TarotCardActionTypes";
import { TarotCard } from './TarotCard';
import {Map} from "immutable"

export interface FetchThreeCardReading {
    type: types.FETCH_THREE_TAROT_CARD_READING;
}

export const FetchThreeCardReadingCreator = (): FetchThreeCardReading => ({
    type: types.FETCH_THREE_TAROT_CARD_READING,
});

export interface FetchThreeCardReadingSuccess {
    type: types.FETCH_THREE_TAROT_CARD_READING_SUCCESS
    reading: Map<number,TarotCard>
}

export const FetchThreeCardReadingSuccessCreator = (reading: Map<number,TarotCard>): FetchThreeCardReadingSuccess => ({
    type: types.FETCH_THREE_TAROT_CARD_READING_SUCCESS,
    reading,
});

export type TarotCardActions = 
| FetchThreeCardReading
| FetchThreeCardReadingSuccess;