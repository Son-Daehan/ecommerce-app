class Api::OrdersController < ApplicationController
  before_action :authenticate_user

  def shipping_address
    user_addresses = current_user.user_addresses
    user_addresses.each do |address|
      if address.ship_to == true
        @ship_to = address.id
        @tax_id = address.tax_id
      end
    end
  end

  def index
    @orders = current_user.orders
    render 'index.json.jb'
  end

  def show
    @order = Order.find_by(id: params[:id])
    render 'show.json.jb'
  end
  
  def create
    shipping_address
    tax_rate = Tax.find_by(id: @tax_id)
  
    carted_products = current_user.carted_products.where(status: "Carted")
    
    

    calculated_subtotal = 0
    carted_products.each do |carted_product|
      calculated_subtotal += carted_product.product.price * carted_product.quantity
    end   

    calculated_tax = calculated_subtotal * tax_rate.total_tax_rate
    calculated_total = calculated_subtotal + calculated_tax

    @order = Order.new(
      user_id: current_user.id,
      subtotal: calculated_subtotal,
      total_tax: calculated_tax,
      total: calculated_total,
      user_address_id: @ship_to,
      tax_id: @tax_id
    )

    if @order.save
      carted_products.update_all(status: "Purchased", order_id: @order.id)
      render 'show.json.jb'
    else
      render json: {errors: @order.errors.full_messages}, status: :unprocessable_entity
    end
    
  end

end
