class Api::ReviewsController < ApplicationController
    def create
        
    end

    def edit 

    end

    def delete

    end

    def show

    end

    private
    def review_params
        params.require(:review).permit(:)
    end
end
