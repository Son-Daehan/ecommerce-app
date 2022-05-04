class Api::TaxesController < ApplicationController
    def index
        @taxes = Tax.all
        render 'index.json.jb'
    end

    def show
        @tax = Tax.find(params[:id])
        render 'show.json.jb'
    end


    
end
