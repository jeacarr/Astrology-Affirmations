import { TarotCardActionTypes as types } from "./TarotCardActionTypes";
import { TarotCard } from './TarotCard';

export interface FetchThreeCardReading {
    type: types.FETCH_THREE_TAROT_CARD_READING;
}

export const FetchThreeCardReadingCreator = (): FetchThreeCardReading => ({
    type: types.FETCH_THREE_TAROT_CARD_READING,
});

export interface FetchThreeCardReadingSuccess {
    type: types.FETCH_THREE_TAROT_CARD_READING_SUCCESS
    reading: TarotCard[]
}

export const FetchThreeCardReadingSuccessCreator = (reading: TarotCard[]): FetchThreeCardReadingSuccess => ({
    type: types.FETCH_THREE_TAROT_CARD_READING_SUCCESS,
    reading,
});

export type TarotCardActions = 
| FetchThreeCardReading
| FetchThreeCardReadingSuccess;