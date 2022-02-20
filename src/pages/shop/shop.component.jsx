import React from 'react';

import SHOP_DATA from './shop.data.js'; // in a separate file by default

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props); // why the hell do we need props ? homepage doesn't have a state !!!
    
            this.state = {                

                collections: SHOP_DATA,

        } // end state
    } // end constructor

    render() {

        const {collections} = this.state; // destructuring the collection 
        
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
} // end class
  
  export default ShopPage;
  

