class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, :foreign_key => :friend_id, class_name: "User"
  after_destroy :destroy_friendship

  private
  def destroy_friendship
    id = self.user_id
    friend = self.friend
    delet = friend.friendships.find_by(friend_id: id)
    if delet
      delet.destroy
    end
  end
end
