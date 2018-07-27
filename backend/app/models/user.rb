class User < ApplicationRecord
  validates :first_name, :last_name, :email, :gender, :password_digest, presence: true
  validates :email, uniqueness: true
  has_secure_password

  def full_name
    [self.first_name, self.last_name].join(" ").strip.squeeze(" ")
  end
end