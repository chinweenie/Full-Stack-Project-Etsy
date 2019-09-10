json.extract! user, :id, :fname
json.shopId user.shop.id if user.shop

if user.profile_pic.attached?
    json.imageUrl url_for(user.profile_pic)
end