/**
 * Created by jerry on 3/29/17.
 */
import Link from './Link';
import { setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick: ()=>
            dispatch(setVisibilityFilter(ownProps.filter))
    }
}
const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

export default FilterLink;