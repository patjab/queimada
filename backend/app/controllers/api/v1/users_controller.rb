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
    # @user = User.new(user_params)
    # MESSAGE FOR PABLO FROM PATRICK:
    #    Sorry, I had to edit this part to the way that Rishi was doing it during lecture because everytime I tried to pass in strong params
    #    for User.new(...).save, it was always rejecting the password and password_confirmation fields that should exist in the params.require(:user) hash.
    #    Password and password_confirmation were present in the outer params hash, but not in the nested params[:user] hash, leading User.new(user_params)
    #    to be processed without the password and subsequently a 422 unprocessable_entity error due to the lack of password.
    @user = User.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], gender: params[:gender], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :gender)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
