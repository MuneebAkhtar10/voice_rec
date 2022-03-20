Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
  resources :voicenotes
  post 'add_voice_to_storage', to: 'voicenotes#add_voice_to_storage'
  get 'get_voice_notes', to: 'voicenotes#get_voice_notes'

end
