Rails.application.routes.draw do
  root to: "links#index"

  resources :links, only: [:index, :create, :edit, :update]
  resources :users, only: [:create, :new]
  
  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  get '/logout', to: "sessions#destroy"

  namespace :api do
    namespace :v1 do
      resources :links, only: [:index, :update, :create]
    end
  end
end
