json.extract! @shop, :id, :name, :owner_id, :products
if @shop.shop_image.attached?
    json.imageUrl url_for(@shop.shop_image)
end