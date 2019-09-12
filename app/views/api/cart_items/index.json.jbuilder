@cart_items.each do |item|
    json.set! item.id do 
        json.partial! 'cart_item', cart_item: item
    end
end