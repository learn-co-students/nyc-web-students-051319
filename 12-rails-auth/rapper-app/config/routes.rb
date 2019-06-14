Rails.application.routes.draw do
#creating all of the routes and url helpers for the 7 basic controller actions
resources :songs
# resources :songs, only: [:show]
# resources :songs, except: [:destroy]

# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/rappers', to: "rappers#index", as: "rappers"
get '/rappers/new', to: "rappers#new", as: "new_rapper" #new_rapper_path
get '/rappers/:id/edit', to: "rappers#edit"
get  '/rappers/:id', to: "rappers#show", as: "rapper" #Rails auto appends "_path" to this string
post '/rappers', to: "rappers#create"
patch '/rappers/:id', to: "rappers#update"

resources :users, only: [:index, :create]
# get '/users', to: "users#index"
get '/signup', to: "users#new", as: "signup"
get '/login', to: "sessions#new", as: "login"
post '/login', to: "sessions#create"
delete '/logout', to: "sessions#destroy"

end
