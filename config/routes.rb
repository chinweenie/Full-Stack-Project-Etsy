Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update]   
    
    resources :categories, only: [:show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:show, :update]

    resources :shops, only: [:show, :create, :update] do    
      resources :products, only: [:create]
    end

  end

  
  
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
