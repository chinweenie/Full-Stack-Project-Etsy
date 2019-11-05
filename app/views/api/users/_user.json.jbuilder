
json.extract! user, :id, :fname, :gender, :city, :birthday, :about
json.shopId user.shop.id if user.shop
json.gender user.gender if user.gender
json.city user.city if user.city
json.about user.about if user.about
if user.birthday
    json.birthday user.birthday 
else
    json.birthday ""
end

if user.profile_pic.attached?
    json.imageUrl url_for(user.profile_pic)
end

