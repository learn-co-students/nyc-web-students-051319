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

#create action
  post '/rappers' do
  rapper = Rapper.create(name: params[:name], age: params[:age], fire: params[:fire])
  redirect "/rappers/#{rapper.id}"
  end


   #edit action
   get '/rappers/:id/edit' do
     @rapper = Rapper.find(params[:id])
     erb :"rappers/edit"
   end

   # show action
     get '/rappers/:id' do
       @rapper = Rapper.find(params[:id])
       erb :"rappers/show"
     end

   patch '/rappers/:id' do
     Rapper.update(params[:id], name: params[:name], age: params[:age])

     redirect "/rappers/#{params[:id]}"
   end

   #delete action
   delete '/rappers/:id/delete' do
     @rapper = Rapper.find(params[:id])
     @rapper.delete

     redirect '/rappers'
   end



end
