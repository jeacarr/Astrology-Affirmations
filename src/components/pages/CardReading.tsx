import { getThreeCardReading } from '@/state/data/tarotCard/TarotCardSelector';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { TarotCard } from '../../state/data/tarotCard/TarotCard';
import { RootState } from '../../state/rootReducer';
import { FetchThreeCardReadingCreator } from '../../state/data/tarotCard/TarotCardActions';
import { Card } from '../layout/Card';
import { groupBy } from 'rxjs';

interface Props{
    reading: TarotCard[];
}

const CardReading: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(FetchThreeCardReadingCreator());
    },[dispatch])


    return (
        <>
        {Object.keys(props.reading)
            
        }
        {/* {props.reading.forEach((t) => {
            return(
                <Card 
                    reading={t}     
                    tarot={0}
                />
            )
        })} */}
        </>
    )
};
const mapStateToProps = (state: RootState): Props => {
    return {
        reading: getThreeCardReading(state),
    }
};
export default connect(mapStateToProps)(CardReading);