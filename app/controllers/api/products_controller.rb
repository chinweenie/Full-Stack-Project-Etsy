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
            render json: @shop.errors.full_messages, status: 422
        end
    end

    def update 
        @shop = current_user.shop.products.find(params[:id])
        if @shop.update(product_params)
            render :show
        else
            render json: @shop.errors.full_messages, status: 422
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :description, :price, :category_id, :shop_id, images: [])
    end
end
