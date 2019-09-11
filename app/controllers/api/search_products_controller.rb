class Api::SearchProductsController < ApplicationController
    def index
        @results = []
        substrings_hash = {}

        if params[:search_query].length <= 0
            @results = Product.all
        else
            all_products = Product.all 
            search_query = params[:search_query].split
                all_products.each do |product|
                    substrings_hash[product.id] = substring(product.title.downcase)
                end
               
                search_query.each do |query|
                   substrings_hash.each do |key, value|
                       if value.include?(query)
                           @results << Product.find(key)
                       end
                   end
                end
        end
        render :index  
    end



    private
    def substring(string)
        subs_array = []
        (0...string.length).each do |start_index|
            (start_index...string.length).each do |end_index|
                subs_array << string[start_index..end_index]
            end
        end
        subs_array
    end
end
