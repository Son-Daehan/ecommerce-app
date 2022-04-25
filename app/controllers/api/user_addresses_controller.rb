class Api::UserAddressesController < ApplicationController

    def get_tax
      tax = Tax.all
      tax.each do |taxes|
        if params[:postal_code] == taxes.postal_code
          return taxes.id
        end
      end
    end

    def index
      @user_addresses = UserAddress.all
      render 'index.json.jb'
    end
  
    def show
      
      @user_address = UserAddress.find(params[:id])
      render 'show.json.jb'
    end

    def create
      @user_address = UserAddress.new(
          street_name: params[:street_name],
          city: params[:city],
          region: params[:region],
          country: params[:country],
          postal_code: params[:postal_code],
          user_id: current_user.id,
          tax_id: get_tax
      ) 

      if @user_address.save
        render 'show.json.jb'
      else
        render json: {errors: @user_address.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    def update
      @user_address = UserAddress.find(params[:id])
  
      @user_address.street_name = params[:street_name] || @user_address.street_name
      @user_address.city = params[:city] || @user_address.city
      @user_address.region = params[:region] || @user_address.region
      @user_address.country = params[:country] || @user_address.country
      @user_address.postal_code = params[:postal_code] || @user_address.postal_code
      @user_address.user_id = params[:user_id] || @user_address.user_id
      
      if @user_address.save
        render 'show.json.jb'
      else
        render json: {errors: @user_address.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    def destroy
      @user_address = UserAddress.find(params[:id])
      @user_address.destroy
      render json: {message: "User address successfully destroyed."
      }
    end

end
