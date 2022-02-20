import React from 'react';

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss';

// we want to map over the items
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4) // so we only show 4 items per collection
                .map( ({ id, ...otherItemProps}) => (                    
                    <CollectionItem key={id} { ...otherItemProps} />
                ))
            }
        </div>

    </div>
)

export default CollectionPreview;