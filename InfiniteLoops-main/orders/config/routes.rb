# frozen_string_literal: true

Rails.application.routes.draw do
  resources :orders
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'orders#index'

  namespace :api do
    namespace :v1 do
      resources :orders do
      end
    end
  end
end
