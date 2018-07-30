class ApplicationController < ActionController::API
  include ActionController::Serialization

  def issue_token(payload)
    JWT.encode(payload, secret)
  end

  def current_user
    User.find_by(id: decoded_token)
  end

  def token
    request.headers['Authorization']
  end

  def decoded_token
    if token
      begin
        decoded = JWT.decode(token, secret)
        decoded[0]["id"]
      rescue JWT::DecodeError
        ""
      end
    else
      ""
    end
  end

  def secret
    "screwthisbutineverknewwhatthiswas"
  end
end
