Rails.application.routes.draw do

  resources :users do
    resources :points
  end
  resources :stores
  resources :transactions

  get '/allstores', to: 'allstores#show'
  post '/token', to: 'login#token'

end
