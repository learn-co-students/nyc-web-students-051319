Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :comments
      resources :users
      resources :posts

      patch "/posts/:id/up_vote", to: "posts#up_vote"
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
