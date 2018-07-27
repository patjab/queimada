class User < ApplicationRecord
  has_secure_password
  validates :first_name, :last_name, :email, :gender, :password_digest, presence: true
end
