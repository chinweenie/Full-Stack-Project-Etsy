@cart_items.each do |item|
    json.partial! 'cart_item', cart_item: item
end