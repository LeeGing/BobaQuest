Rails.application.routes.draw do

  resources :users do
    resources :points
  end
<<<<<<< HEAD
  resources :stores
  resources :transactions
  resources :orders
=======
>>>>>>> master

  resources :stores do
    resources :graph
end



  get '/allstores', to: 'allstores#show'
  post '/token', to: 'login#token'
<<<<<<< HEAD
  get '/orders/:id', to: 'orders#show'

  # post '/orders', to: 'orders#create'
  # get '/orders', to: 'orders#index'
  # get '/users/:id/points' to: 'transactions#achievement'
=======
>>>>>>> master

end
