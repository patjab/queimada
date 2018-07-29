class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, :foreign_key => :friend_id, class_name: "User"
  validates :user_id, :uniqueness => { :scope => :friend_id }
  after_destroy :destroy_friendship
  after_create :create_friendship

  private
  def destroy_friendship
    id = self.user_id
    friend = self.friend
    delet = friend.friendships.find_by(friend_id: id)
    if delet
      delet.destroy
    end
  end

  def create_friendship
    id = self.user_id
    friend = self.friend
    delet = friend.friendships.find_by(friend_id: id)
    unless delet
      Friendship.create(friend_id: id, user_id: friend.id)
    end
  end
end
