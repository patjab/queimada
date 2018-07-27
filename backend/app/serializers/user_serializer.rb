class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :avatar, :first_name, :last_name, :gender, :email
end
