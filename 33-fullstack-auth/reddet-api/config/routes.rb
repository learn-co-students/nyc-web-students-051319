Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :comments
      resources :posts

      patch "/posts/:id/up_vote", to: "posts#up_vote"
      post "/posts/:id/comment", to: "posts#comment"

      post "/signup", to: "users#create"
      post "/login", to: "auth#login"

      get "/auto_login", to: "auth#auto_login"
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
