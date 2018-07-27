class FriendRequest < ApplicationRecord
  belongs_to :requested, :foreign_key => :requested_user_id, class_name: "User"
  belongs_to :requester, :foreign_key => :requester_user_id, class_name: "User"
end
