import { combineReducers } from "@reduxjs/toolkit";
import { Record, RecordOf } from "immutable";
import { TarotCard } from "./data/tarotCard/TarotCard";
import { TarotCardActions } from './data/tarotCard/TarotCardActions';
import { TarotCardActionTypes as types } from './data/tarotCard/TarotCardActionTypes';

interface TarotCardStateContract {
    threeReading: TarotCard[];
}

const TarotCardStateRecord = Record<TarotCardStateContract>({
    threeReading: []
});

const tarotCardReducer = (state = new TarotCardStateRecord(), action: TarotCardActions) => {
    switch(action.type) {
        case types.FETCH_THREE_TAROT_CARD_READING_SUCCESS:
            const reading = action.reading;
            // reading.forEach((x) => {
            //     x.set("upright", Math.random() < 0.5)
            // })
            return state.set("threeReading", reading)
        default:
            return state;
    }
}

export const rootReducer = combineReducers ({
    tarotCard: tarotCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;