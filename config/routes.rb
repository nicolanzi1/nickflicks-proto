Rails.application.routes.draw do
  get 'static_pages/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
