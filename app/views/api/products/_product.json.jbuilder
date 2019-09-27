json.extract! product, :id, :title, :description, :price, :quantity
json.categoryId product.category_id
json.shopId product.shop_id
json.shopName product.shop.name
json.ownerId product.shop.owner.id
json.reviewsLength product.reviews.length

if product.images.attached?
    json.imageUrls product.images.map { |file| url_for(file) }
end    