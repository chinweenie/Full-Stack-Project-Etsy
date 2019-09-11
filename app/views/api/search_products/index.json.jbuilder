@results.each do |result|
    json.set! result.id do
        json.extract! result, :id, :title, :description, :price, :quantity
        json.categoryId result.category_id
        json.shopId result.shop_id
        json.shopName result.shop.name
        if result.images.attached?
          json.imageUrls result.images.map { |file| url_for(file) }
        end    
  end
end


