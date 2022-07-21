class DevelopersController < ApplicationController
    before_action :find_dev, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: :index

    def index
        devs = Developer.all
        render json: devs
    end

    def show
        render json: @dev
    end
    
    def create
        dev = Developer.create!(dev_params)
    end

    def update
        @dev.update!(dev_params)
        render json: @dev
    end

    def destroy
        @dev.destroy
        head :no_content
    end

    private

    def find_dev
        @dev = Dev.find(params[:id])
    end
    
    def dev_params
        params.permit(:name, :founding_year)
    end
end
