Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show] # ADDED SHOW TO SUPPORT FINDING THE USER FROM LOGIN
      get "/users/:id/friends", to: "friendship#index"

      delete "/friendships/:id", to: "friendship#delete"

      post "/friend_requests", to: "friend_requests#create"
      get "/friend_requests/:id", to: "friend_requests#index"
      get "/my_friend_requests/:id", to: "friend_requests#friend_requests"

      delete "/friend_requests/:id/reject", to: "friend_requests#delete"
      get "/friend_requests/:id/accept", to: "friend_requests#accept"

      post "/auth", to: "auth#login"
      get "/current_user", to: "auth#get_current_user"
    end
  end
end
