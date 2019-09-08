json.extract! product, :id, :title, :description, :price
json.categoryId product.category_id
json.shopId product.shop_id
json.imageUrls product.images.map { |file| url_for(file) }