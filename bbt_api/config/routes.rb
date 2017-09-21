Rails.application.routes.draw do

  resources :users do
    resources :points
  end

  resources :transactions
  resources :orders

  resources :stores do
    resources :graph
  end

  get '/allstores', to: 'allstores#show'
  post '/token', to: 'login#token'
  get '/orders/:id', to: 'orders#show'

<<<<<<< HEAD
=======
  get '/users/find/:username', to: 'users#find_by_username'



>>>>>>> sept20/test
end
