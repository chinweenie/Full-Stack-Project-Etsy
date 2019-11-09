@shops.each do |shop|
  json.set! shop.id do
    json.partial! 'shop', shop: shop
  end
end



