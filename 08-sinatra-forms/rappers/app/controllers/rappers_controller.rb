class RappersController < ApplicationController

#index action
  get '/rappers' do
    @rappers = Rapper.all
    erb :"rappers/index"
  end

  #new action
  get '/rappers/new' do
    erb :"rappers/new"
  end

#show action
  get '/rappers/:id' do
    @rapper = Rapper.find(params[:id])
    erb :"rappers/show"
    end

#create action
post '/rappers' do
rapper = Rapper.create(name: params[:name], age: params[:age], fire: params[:fire])
redirect "/rappers/#{rapper.id}"
end

end
