import { getThreeCardReading } from '@/state/data/tarotCard/TarotCardSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { TarotCard } from '../../state/data/tarotCard/TarotCard';
import { RootState } from '../../state/rootReducer';
import { FetchThreeCardReadingCreator } from '../../state/data/tarotCard/TarotCardActions';

interface Props{
    reading: TarotCard[];
}

const CardReading: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(FetchThreeCardReadingCreator());
    },[dispatch])

    return (
        <>\
        </>
    )
};
const mapStateToProps = (state: RootState): Props => {
    return {
        reading: getThreeCardReading(state),
    }
};
export default connect(mapStateToProps)(CardReading);