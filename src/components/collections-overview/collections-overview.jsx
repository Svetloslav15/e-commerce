import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './collections-overview.scss';
import PreviewCollection from '../preview-collection/preview-collection';
import {selectShopCollections} from '../../redux/shop/shop-selectors';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);