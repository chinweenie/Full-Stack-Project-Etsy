export const selectShopProducts = (allProducts, shopId) => {
    const selectedProducts = [];
    Object.keys(allProducts).forEach(id => {
        if (allProducts[id].shopId == shopId) {
            selectedProducts.push(allProducts[id]);
        };
    });
    return selectedProducts;
}

export const selectCategoryProducts = (allProducts, categoryId) => {
    const selectedProducts = [];
    Object.keys(allProducts).forEach(id => {
        if (allProducts[id].categoryId == categoryId){
            selectedProducts.push(allProducts[id]);
        }
    });

    return selectedProducts;
}

export const selectAllShops = allShops => {
    return Object.keys(allShops).map(id => allShops[id]);
}

export const currentUserHasShop = (sessionId, allUsers) => {
    const user = allUsers[sessionId];
    const shopId = user.shopId
    return shopId;
}

export const selectAllUsers = (allUsers) => {
    return Object.keys(allUsers).map(id => allUsers[id]);
}

export const selectCurrentUser = (allUsers, sessionId) => {
    return allUsers[sessionId];
}

export const selectCurrentUserShop = (allShops, shopId) => {
    return allShops[shopId];
}

export const selectAllProducts = (allProducts) => {
    return Object.keys(allProducts).map(id => allProducts[id]);
}

export const selectAllSearch = (allSearch) => {
    return Object.keys(allSearch).map(id => allSearch[id]);
}

export const selectAllCartItems = (allCartItems) => {
    return Object.keys(allCartItems).map(id => allCartItems[id]);
}

export const selectAllReviews = allReviews => {
    return Object.keys(allReviews).map(id => allReviews[id]);
};

export const selectFavoriteId = (allFavorites, favoritableId, currentUserId) => {
    if (!currentUserId) return undefined;
    const favoriteId = Object.values(allFavorites).filter(favorite => favorite.favoritableId == favoritableId && favorite.userId == currentUserId);
    return favoriteId[0];
}

export const selectFavoritedShops = (allFavorites, userId) => {
    if (!userId) return undefined;
    const shops = [];
    Object.values(allFavorites).forEach(favorite => {
        if (favorite.userId == userId && favoritabletype === "Shop") shops.push(favorite); 
    })
    return shops;
}

export const selectFavoritedItems = (allFavorites, allProducts ,userId) => {
    if (!userId) return undefined;
    const items = [];
    Object.values(allFavorites).forEach(favorite => {
        if (favorite.userId == userId && favorite.favoritableType === "Product") items.push(allProducts[favorite.favoritableId]);
    })
    debugger
    return items;
}

