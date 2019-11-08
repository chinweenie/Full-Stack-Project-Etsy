json.extract! shop, :id, :name, :owner, :products
if shop.shop_image.attached?
    json.imageUrl url_for(shop.shop_image)
end

if shop.owner.profile_pic.attached?
    json.profilePicUrl url_for(shop.owner.profile_pic)
end

json.usersWhoFavoritedMe shop.users_who_favorited_me.map { |user| user.id }