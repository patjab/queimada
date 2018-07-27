Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      get "/users/:id/friends", to: "friendship#index"

      post "/friend_requests", to: "friend_requests#create"
      get "/friend_requests/:id", to: "friend_requests#index"

      delete "/friend_requests/:id/reject", to: "friend_requests#delete"
      get "/friend_requests/:id/accept", to: "friend_requests#accept"
    end
  end
end
