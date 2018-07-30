class Api::V1::AuthController < ApplicationController
  def login
    user = User.find_by(email: params[:auth][:email][:user][:email])
    if user && user.authenticate(params[:auth][:email][:user][:password])
      render json: { token: issue_token({ id: user.id }) }
    else
      render json: { error: "Login credentials are incorrect" }, status: 401
    end
  end

  def get_current_user
    render json: current_user
  end

  private
  def login_user_params

  end
end
