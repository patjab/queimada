class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :first_name, :last_name, :gender, :email
end
