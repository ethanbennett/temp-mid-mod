Rails.application.routes.draw do
  root to: "links#index"

  resources :links, only: [:index]
  resources :users, only: [:create, :new, :destroy]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:update]
    end
  end
end
