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


#show update
  get '/rappers/:id/update' do
    @rapper = Rapper.find(params[:id])
    erb :"rappers/update"
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

#update action
  patch '/rappers/:id' do
    params.keys.each do |key|

      if key.include?("method")
        
      else
        if !params[key.to_sym].empty?
          Rapper.update(params[:id], key.to_sym => params[key.to_sym])
        end
      end
    end

    # Rapper.update(params[:id], name: params[:name]) if !params[:name].empty?

    # Rapper.update(params[:id], age: params[:age]) if !params[:age].empty?

    # Rapper.update(params[:id], fire: params[:fire]) if !params[:fire].empty?

    redirect "/rappers/#{params[:id]}"
  end

  #delete action
    delete '/rappers/:id' do
      Rapper.delete(params[:id])
      redirect "/rappers"
    end
end
