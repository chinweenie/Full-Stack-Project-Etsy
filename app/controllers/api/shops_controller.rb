class Api::ShopsController < ApplicationController
    before_action :require_login, only: [:create, :update]

    def create
        @shop = Shop.new(shop_params)
        if @shop.save
            render 'api/shops/show'
        else    
            render json: ['You can only create ONE shop'], status: 422
        end
    end

    def show
        @shop = Shop.find(params[:id])
        render :show
    end

    def update
        @shop = Shop.find(params[:id])
        if @shop.update(shop_params)
            render :show
        else
            render json: @shop.errors.full_messages, status: 422
        end
    end

    def index
        @shops = Shop.all 
        render :index
    end

    private
    def shop_params
        params.require(:shop).permit(:name, :owner_id, :shop_image, :id)
    end
end
