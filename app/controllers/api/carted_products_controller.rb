class Api::CartedProductsController < ApplicationController
  
  before_action :authenticate_user

    def index
      @carted_products = current_user.carted_products.where(status: "Carted")
      @calculated_subtotal = 0
      @carted_products.each do |carted|
        @calculated_subtotal += carted.product.price * carted.quantity
        
      end

      render 'index.json.jb'

    end
    
    def create


      @carted_product = CartedProduct.new(
        user_id: current_user.id,
        product_id: params[:product_id],
        quantity: params[:quantity],
        order_id: params[:order_id],
        status: "Carted"
      )

      if @carted_product.save
        render 'show.json.jb'
      else
        render json: {errors: @carted_product.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    def destroy
      @carted_product = CartedProduct.find_by(id: params[:id])
      @carted_product.update(status: "Removed")
      render json: {message: "You removed #{@carted_product.product.name}"}
    end
      
end
