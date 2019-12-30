import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';
import {selectCollection} from "../../redux/shop/shop-selectors";

const CollectionPage = ({match, collection}) => {
    if (!collection) {
        return (
            <Redirect to='/error'/>
        )
    }
    const {title, items} = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);