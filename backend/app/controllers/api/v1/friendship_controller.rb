class Api::V1::FriendshipController < ApplicationController
  def index
    @user = User.find_by(id: params[:id])
    if @user
      @friends = @user.friends
      render json: @friends, each_serializer: UserSerializer, status: :success
    else
      render json: {error: "User Not Found"}, status: :not_found unless @user
    end
  end
end
