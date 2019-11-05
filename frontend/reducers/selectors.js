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

// export const isFavorited = (shopId, currentUserId, allFavorites) => {
    
// }