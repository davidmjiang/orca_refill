Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'location#index'
  resources :users, only: [:new, :create, :show]
  get "/log-in" => "sessions#new"
  post "/log-in" => "sessions#create"
  get "/log-out" => "sessions#destroy", as: :log_out
  resources :cards
  get "/closest-points" => "location#closest" #query lat=1234&long=1234
end
