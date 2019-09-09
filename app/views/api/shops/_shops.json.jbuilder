json.extract! shop, :id, :name, :owner, :products, :users_who_favorited_me
if shop.shop_image.attached?
    json.imageUrl url_for(shop.shop_image)
end

if shop.owner.profile_pic.attached?
    json.profilePicUrl url_for(shop.owner.profile_pic)
end