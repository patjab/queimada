class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:update]

  def index
    @users = User.all
    render json: @users
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { token: issue_token({ id: @user.id }) }, status: :created # REPLACED RENDER JSON: @USER TO RENDER JSON { TOKEN: @USER.ID } FOR MORE SECURE LOGIN
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # HAD TO ADD THIS TO FIND A USER'S INFORMATION AFTER LOGIN
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :gender, :password, :password_confirmation, :avatar)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
