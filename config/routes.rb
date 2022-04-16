Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    get "/products" => "products#index"
    get "/products/:id" => "products#show"
    post "/products" => "products#create"
    patch "/products/:id" => "products#update"
    delete "/products/:id" => "products#destroy"
    
    # users
    get "/users" => "users#index"
    get "/users/:id" => "users#show"
    post "/users" => "users#create"

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
  end

end
