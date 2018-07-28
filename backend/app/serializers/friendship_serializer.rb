class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :friend
  has_one :friend, class_name: "User"
end
