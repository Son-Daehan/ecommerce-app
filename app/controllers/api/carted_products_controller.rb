class Api::CartedProductsController < ApplicationController
  
  before_action :authenticate_user

    def index
      @carted_products = current_user.carted_products.where(status: "Carted")
      @calculated_subtotal = 0
      @carted_products.each do |carted|
        @calculated_subtotal += carted.product.price * carted.quantity
        
      end

      taxes = Tax.all
      addresses = current_user.user_addresses.where(ship_to: true)
      addresses.each do |address|
        taxes.each do |tax|
          if tax.id == address.tax_id
            @total_tax_rate = tax.total_tax_rate
          end
        end
      end

      @estimated_tax = (@calculated_subtotal.to_f * @total_tax_rate.to_f).to_d.truncate(2)
      @total_order_price = @estimated_tax + @calculated_subtotal

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
      render json: {message: "You removed #{@carted_product.product.title}"}
    end
      
end
