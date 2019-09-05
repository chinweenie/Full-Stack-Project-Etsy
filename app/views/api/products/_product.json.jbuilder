json.extract! product, :id, :title, :description, :price, :category_id, :shop_id
json.imageUrls product.images.map { |file| url_for(file) }