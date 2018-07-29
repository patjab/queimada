class FriendRequest < ApplicationRecord
  belongs_to :requested, :foreign_key => :requested_user_id, class_name: "User"
  belongs_to :requester, :foreign_key => :requester_user_id, class_name: "User"

  def create_friendship
    Friendship.create(user_id: self.requested_user_id, friend_id: self.requester_user_id)
  end
end
