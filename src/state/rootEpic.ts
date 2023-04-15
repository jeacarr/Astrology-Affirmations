import { combineEpics, ofType } from "redux-observable";
import { Epic } from './store';
import { TarotCardActionTypes } from './data/tarotCard/TarotCardActionTypes';
import { map, mergeMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { TarotCard, TarotCardRecord } from './data/tarotCard/TarotCard';
import { FetchThreeCardReadingSuccessCreator } from './data/tarotCard/TarotCardActions';
import {Map} from "immutable"

 const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6471948c29mshc84f1b7b6564f85p1021fbjsnd01bbab69cba',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }
    };

const fetchThreeCardReadingEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType(TarotCardActionTypes.FETCH_THREE_TAROT_CARD_READING),
        mergeMap(() => {
            return ajax({
                "async": true,
                "crossDomain": true,
                "url": "https://horoscope-astrology.p.rapidapi.com/threetarotcards",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                    "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com"
                }
            }).pipe(
                map((res) => res.response as Object),
                map((response: Object) => {
                    console.log(Object.values(response))
                    const responseMap: TarotCard[] =  Object.values(response)[0];
                    const reading = Map<number,TarotCard> (
                        responseMap.map((x) => [x.sequence,  new TarotCardRecord({
                        ...x,
                        upright: Math.random() < 0.5,
                    }) ]));
                    return FetchThreeCardReadingSuccessCreator(reading);
                })
            );
        })
    );
    


export const rootEpic = combineEpics(
    fetchThreeCardReadingEpic,
);