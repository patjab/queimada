class Api::V1::FriendRequestsController < ApplicationController
  before_action :find_friend_request, only: [:accept]

  def index
    @friend_requests = User.find(params[:id]).friend_requests
    render json: @friend_requests
  end

  def create
    @friend_request = FriendRequest.new(friend_request_params)
    if @friend_request.save
      render json: @friend_request, status: :created
    else
      render json: { errors: @friend_request.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def friend_request_params
    params.require(:friend_request).permit(:requested_user_id, :requester_user_id)
  end

  def find_friend_request
    @friend_request = FriendRequest.find(params[:id])
  end
end
