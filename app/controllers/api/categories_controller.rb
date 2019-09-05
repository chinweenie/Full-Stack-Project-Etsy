class Api::CategoriesController < ApplicationController

    def show
        @category = Category.find(params[:id])
        render :show
    end

    def index
        @categories = Category.all 
        render :index
    end
end
