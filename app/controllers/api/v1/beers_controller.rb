class Api::V1::BeersController < ApplicationController
    def index
      render json: Beer.all
    end
  
    def create
      fruit = Beer.create(beer_params)
      render json: beer
    end
  
    def destroy
      Beer.destroy(params[:id])
    end
  
    def update
      beer = Beer.find(params[:id])
      beer.update_attributes(fruit_params)
      render json: beer
    end
  
    private
  
    def beer_params
      params.require(:beer).permit(:name, :style, :hop, :alcohol)
    end
  end