class Api::CategoriesController < ApplicationController
    before_action :require_login, only: [:create, :destroy]

    def index
        @favorites = Favorite.all 
        render :index
    end
    
    def create
        @favorite = Favorite.new(favorite_params)
        @favorite.user_id = current_user.id

        if @favorite.save
            render :show 
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = current_user.favorites.find(params[:id])
        if @favorite.destroy 
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    private
     def favorite_params
        params.require(:favorite).permit(:favoritable_id, :favoritable_type)
     end
end