class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :requester
  has_one :requester

  has_one

  def user_id
    object.requested_user_id
  end
end
