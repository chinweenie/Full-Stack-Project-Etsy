class Api::ProductsController < ApplicationController
    before_action :require_login, only: [:create, :update]

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update 
        @product = current_user.shop.products.find(params[:id])
        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = current_user.shop.products.find(params[:id])
        @product.destroy 
    end

    

    private
    def product_params
        params.require(:product).permit(:title, :description, :id, :price, :category_id, :quantity, :shop_id, images: [])
    end
end
