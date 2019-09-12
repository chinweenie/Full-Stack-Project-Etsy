class Api::CartItemsController < ApplicationController

    def index 
        @cart_items = CartItem.all
    end

    def create
        debugger
        if check_current_cart(product_id, quantity)
            @cart_item = CartItem.find_by(product_id: product_id)
            total = @cart_item.quantity + quantity.to_i

            if @cart_item.update(quantity: total)
                render json: ['Succesfully added item into your cart!']
            else
                render json: @cart_item.errors.full_messages
            end

        else
            @cart_item = CartItem.new(cart_item_params)

            if @cart_item.save
                render json: ['Succesfully added item into your cart!']
            else
                render json: @cart_item.errors.full_messages
            end

        end
        
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if params[:cart_item][:quantity] == '0'
            @cart_item.destroy 
        else
            if @cart_item.update(cart_item_params)
                render json: ['Successfully update your cart!']
            else
                render json: @cart_item.errors.full_messages
            end
        end
        
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render json: ['Successfully removed item from your cart!']
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:id, :product_id, :quantity)
    end

    def check_current_cart(cart_item_product_id, quantity)
        existing_cart_item = CartItem.find_by(product_id: cart_item_product_id)
        debugger
        return !!existing_cart_item
    end

    def quantity
        params[:cart_item][:quantity]
    end

    def product_id 
        params[:cart_item][:product_id]
    end


end
