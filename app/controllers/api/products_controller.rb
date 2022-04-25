class Api::ProductsController < ApplicationController

    def index
      @products = Product.all  
      render 'index.json.jb'
    end
  
    def create
      @product = Product.new(
        name: params[:name],
        price: params[:price],
        description: params[:description],
        url: params[:url],
        supplier_id: params[:supplier_id]
        ) 
      if @product.save
        render 'show.json.jb'
      else
        render json: {errors: @product.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    def show
      @product = Product.find(params[:id])
      render 'show.json.jb'
    end
  
    def update
      @product = Product.find(params[:id])
  
      @product.name = params[:name] || @product.name
      @product.price = params[:price] || @product.price
      @product.description = params[:description] || @product.description
      @product.supplier_id = params[:supplier_id] || @product.supplier_id
      @product.url = params[:url] || @product.url
      
      if @product.save
        render 'show.json.jb'
      else
        render json: {errors: @product.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    def destroy
      @product = Product.find(params[:id])
      @product.destroy
      render json: {message: "Product successfully destroyed."
      }
    end

end
