json.extract! review, :id, :rating, :body, :product_id, :user_id
json.userName review.user.fname
if review.user.profile_pic.attached? 
    json.profilePicUrl url_for(review.user.profile_pic)
else
    json.profilePicUrl "https://images.squarespace-cdn.com/content/v1/533665d6e4b01ddc232fb6d6/1440719121973-EX71VHUG6J0EFA3HODG4/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH33scGBZjC30S7EYewNF5iKKwhonf2ThqWWOBkLKnojuqYeU1KwPvsAK7Tx5ND4WE/new-etsy-avatar.jpg"
end