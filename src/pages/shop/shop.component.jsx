import React from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component.jsx';

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })}
            </div>
        )
    }
}

export default ShopPage;