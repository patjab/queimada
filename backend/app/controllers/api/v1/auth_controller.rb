class Api::V1::AuthController < ApplicationController
  def login
    user = User.find_by(email: params[:auth][:email][:user][:email])
    if user && user.authenticate(params[:auth][:email][:user][:password])
      render json: { id: user.id, email: user.email }
    else
      render json: { error: "Auth Failed" }, status: 401
    end
  end

  def get_current_user
    render json: current_user
  end

  private
  def login_user_params

  end
end
