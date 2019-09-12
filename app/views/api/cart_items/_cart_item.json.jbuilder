json.extract! cart_item, :id, :product_id, :quantity
json.shopId cart_item.product.shop_id
json.shopName cart_item.product.shop.name 

if cart_item.product.images.attached?
    json.imageUrls cart_item.product.images.map { |file| url_for(file) }
end    