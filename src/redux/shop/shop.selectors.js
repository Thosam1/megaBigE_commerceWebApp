import { createSelector } from "reselect";

import memoize from "lodash.memoize";

const selectShop = state => state.shop;


export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections)
)

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
); // memoize avoid reruning if function was already ran with same parameters
