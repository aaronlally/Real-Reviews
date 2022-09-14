Rails.application.routes.draw do
  # full CRUD for reviews developers games and users
  resources :reviews
  resources :developers
  resources :games
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
# sessions controller methods for login and logout
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # users controller methods for creating an accountig and auto-login
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
end
