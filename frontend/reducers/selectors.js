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