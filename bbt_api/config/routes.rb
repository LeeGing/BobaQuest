Rails.application.routes.draw do

  resources :users do
    resources :points
  end
  resources :stores
  resources :transactions

  post '/token', to: 'login#token'
  # get '/users/:id/points' to: 'transactions#achievement'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
