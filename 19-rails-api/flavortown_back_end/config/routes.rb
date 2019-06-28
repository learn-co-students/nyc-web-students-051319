Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/dranks', to:"api/v1/drinks#index"
  # get '/dranksspecific', to:"api/v1/drinks/:id#index"


  namespace :api do
    namespace :v1 do
      get '/drankydrink', to:"madeup#alsomadeup"
      resources :drinks
      patch '/drankz', to:"drinks#custom"
    end
  end
end
