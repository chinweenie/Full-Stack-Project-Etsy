json.extract! user, :id, :fname, :shop

if user.profile_pic.attached?
    json.imageUrl url_for(user.profile_pic)
end