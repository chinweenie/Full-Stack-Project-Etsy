Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update, :index]   
    
    resources :categories, only: [:show, :index]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:show, :update, :destroy, :index] do    
      resources :reviews, only: [:index, :create]
    end

    resources :shops, only: [:show, :create, :update, :index] do    
      resources :products, only: [:create]
    end

    resources :search_products, only: [:index]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :reviews, only: [:update]
    resources :favorites, only: [:create, :destroy, :index]
  end

  
  
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
