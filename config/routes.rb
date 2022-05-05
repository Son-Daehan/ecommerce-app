Rails.application.routes.draw do

  namespace :api do
    get "/products" => "products#index"
    get "/products/:id" => "products#show"
    post "/products" => "products#create"
    patch "/products/:id" => "products#update"
    delete "/products/:id" => "products#destroy"

    get "/images" => "images#index"
    get "/images/:id" => "images#show"
    post "/images" => "images#create"
    patch "/images/:id" => "images#update"
    delete "/images/:id" => "images#destroy"
    
    # users
    get "/users" => "users#index"
    get "/users/:id" => "users#show"
    post "/users" => "users#create"
    patch "/users/:id" => "users#update"

    # user address
    get "/user_addresses" => "user_addresses#index"
    get "/user_addresses/:id" => "user_addresses#show"
    post "/user_addresses" => "user_addresses#create"
    patch "/user_addresses/:id" => "user_addresses#update"
    delete "/user_addresses/:id" => "user_addresses#destroy"

    # sessions
    post "/sessions" => "sessions#create"
    get "/sessions" => "sessions#logged_in"
    
    # orders
    get "/orders" => "orders#index"
    get "/orders/:id" => "orders#show"
    post "/orders" => "orders#create"

    # carted_products
    post "/carted_products" => "carted_products#create"
    get "/carted_products" => "carted_products#index"
    delete "/carted_products/:id" => "carted_products#destroy"

    # suppliers
    get "/suppliers" => "suppliers#index"
    get "/suppliers/:id" => "suppliers#show"
    post "/suppliers" => "suppliers#create"
    patch "/suppliers/:id" => "suppliers#update"
    delete "/suppliers/:id" => "suppliers#destroy"

    # taxes
    get "/taxes" => "taxes#index"
    get "/taxes/:id" => "taxes#show"

  end

  get "/*path" => proc { [200, {}, [ActionView::Base.new.render(file: 'public/index.html')]] } 
end
