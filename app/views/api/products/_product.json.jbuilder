json.extract! product, :id, :title, :description, :price, :quantity
json.categoryId product.category_id
json.shopId product.shop_id

if product.images.attached?
    json.imageUrls product.images.map { |file| url_for(file) }
end    