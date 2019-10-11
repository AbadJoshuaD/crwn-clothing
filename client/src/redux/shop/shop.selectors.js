import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
// Due to the asynchronicity of the program we need to have an based state of empty array and if the collectios already
// exist we will map out the collectios
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(key => collections[key]) : []
);
//This was same with the urls of collections. We can now leverage the object key of the collections since basically it was
// the same with the route.
/* Fire base sampe data hats: {
    id:1
    item: ......
    img: ....
 as shown we can tap in to the hats object as our url params.
}*/
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    );
export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)