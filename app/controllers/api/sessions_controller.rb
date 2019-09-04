class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user  
      login(@user)
      render 'api/users/show'
    else
      render json: ["The user is not found"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: ['Logout successfully']
    else
      render json: {}, status: 404
    end
  end
end
