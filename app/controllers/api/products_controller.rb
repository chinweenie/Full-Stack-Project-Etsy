class Api::ProductsController < ApplicationController
    before_action :require_login, only: [:create, :update]

    def index
        @products = Product.all
        render :index
    end

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

        # check if user submitted a patch request
        # with or without uploading images
        # this prevents calling .length on nil in case
        # user did not upload new images 
        if params[:product][:images]
            # implement check to limit the number of images stored
            if params[:product][:images].length + @product.images.length > 5
                @product.images.purge
            end
        end
        
        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = current_user.shop.products.find(params[:id])
        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    

    private
    def product_params
        params.require(:product).permit(:title, :description, :id, :price, :category_id, :quantity, :shop_id, images: [])
    end
end
