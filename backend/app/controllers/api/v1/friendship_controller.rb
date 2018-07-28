class Api::V1::FriendshipController < ApplicationController
  def index
    @user = User.find_by(id: params[:id])
    if @user
      @friendships = @user.friendships
      render json: @friendships, each_serializer: FriendshipSerializer, status: :success
    else
      render json: {error: "User Not Found"}, status: :not_found unless @user
    end
  end

  def delete
    @friendship = Friendship.find_by(id: params[:id])
    if @friendship && @friendship.destroy
      render json: {success: "Friendship has been ended... :("}, status: :success
    end
  end
end
