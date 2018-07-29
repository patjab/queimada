class ApplicationController < ActionController::API
  include ActionController::Serialization

  def current_user
    User.find_by(id: token)
  end

  def token
    request.headers['Authorization']
  end
end
