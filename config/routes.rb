Rails.application.routes.draw do
  devise_for :users
  root to: 'trips#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index] do
    member do
      post :connect
      post :unconnect
    end
  end
  resources :trips, only: [:show, :new, :create, :edit, :update] do
    resources :alerts, only: [:create]
  end
  resources :alerts, only: [:show]
  resources :connections, only: [:destroy]
  get 'dashboard', to: 'dashboards#show', as: 'dashboard'
end

