@favorites.each do |favorite|
    json.set! favorite.id do   
        json.partial! 'favorite', favorite: favorite
    end
end