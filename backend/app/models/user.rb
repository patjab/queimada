class User < ApplicationRecord
  has_secure_password

  # MESSAGE TO PABLO FROM PATRICK: added password_confirmation to the validation
  validates :first_name, :last_name, :email, :gender, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true
  has_many :friend_requests, :foreign_key => :requested_user_id
  has_many :friendships
  has_many :friends, through: :friendships, :foreign_key => :friend_id, class_name: "User"

  def full_name
    [self.first_name, self.last_name].join(" ").strip.squeeze(" ")
  end
end
