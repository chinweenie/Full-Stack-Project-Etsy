Rails.application.routes.draw do
  get 'products/new'
  get 'products/create'
  get 'products/update'
  get 'products/destroy'
  get 'products/show'
  get 'products/index'
  get 'session/create'
  get 'session/new'
  get 'session/destroy'
  resources :users, only: [:new, :create, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
