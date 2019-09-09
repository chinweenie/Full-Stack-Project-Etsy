Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update]   
    
    resources :categories, only: [:show, :index]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:show, :update, :destroy, :index]

    resources :shops, only: [:show, :create, :update, :index] do    
      resources :products, only: [:create]
    end

  end

  
  
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
