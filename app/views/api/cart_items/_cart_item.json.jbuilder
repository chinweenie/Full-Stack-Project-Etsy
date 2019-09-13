json.extract! cart_item, :id, :quantity
json.productId cart_item.product_id 
json.shopId cart_item.product.shop_id
json.shopName cart_item.product.shop.name 
json.productName cart_item.product.title

json.maximumQuantity cart_item.product.quantity
json.price cart_item.product.price 

if cart_item.product.images.attached?
    json.imageUrls cart_item.product.images.map { |file| url_for(file) }
end    

if cart_item.product.shop.shop_image.attached?
    json.shopImageUrl url_for(cart_item.product.shop.shop_image)
end