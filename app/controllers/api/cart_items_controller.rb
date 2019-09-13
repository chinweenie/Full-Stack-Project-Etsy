class Api::CartItemsController < ApplicationController
    before_action :require_login
    
    def index 
        @cart_items = CartItem.where(user_id: current_user.id)
    end

    def create
        if check_current_cart(product_id, quantity)
            @cart_item = CartItem.find_by(product_id: product_id, user_id: current_user.id)

            total = @cart_item.quantity + quantity.to_i
            maximum_quantity = Product.find_by(id: product_id).quantity 

            if total > maximum_quantity
                render json: ['Sorry, not enough stock!'], status: 422 
                return 
            else
                if @cart_item.update(quantity: total)
                    render :show
                else
                    render json: @cart_item.errors.full_messages, status: 422
                end
            end
        else
            @cart_item = CartItem.new(cart_item_params)
            @cart_item.user_id = current_user.id
            if @cart_item.save
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 422
            end

        end
        
    end

    def update
        @cart_item = CartItem.where(user_id: current_user.id, id: params[:id]).first
        if params[:cart_item][:quantity] == '0'
            @cart_item.destroy 
        else

            maximum_quantity = Product.find_by(id: @cart_item.product_id).quantity  
            total = quantity + @cart_item.quantity 

            if quantity > maximum_quantity 
                @cart_item.quantity = maximum_quantity
                @cart_item.save!  
                render :show   

            else         
                if @cart_item.update(cart_item_params)
                    render :show
                else
                    render json: @cart_item.errors.full_messages
                end
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
        existing_cart_item = CartItem.find_by(product_id: cart_item_product_id, user_id: current_user.id)
        
        return !!existing_cart_item
    end

    def quantity
        params[:cart_item][:quantity].to_i
    end

    def product_id 
        params[:cart_item][:product_id].to_i
    end


end
