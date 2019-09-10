class Api::UsersController < ApplicationController

  before_action :require_login, only: [:show, :update]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email or password'], status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def index
    @users = User.all 
    render :index
  end

  private
  def user_params
    params.require(:user).permit(
      :fname,
      :password, 
      :email, 
      :profile_pic, 
      :gender,
      :id,
      :city,
      :birthday,
      :about)
  end

end
