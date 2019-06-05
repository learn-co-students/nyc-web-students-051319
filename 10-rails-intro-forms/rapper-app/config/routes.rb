Rails.application.routes.draw do
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/rappers', to: "rappers#index"
get '/rappers/new', to: "rappers#new"
get '/rappers/:id/edit', to: "rappers#edit"
get  '/rappers/:id', to: "rappers#show", as: "rapper"
post '/rappers', to: "rappers#create"
patch '/rappers/:id', to: "rappers#update"

end
