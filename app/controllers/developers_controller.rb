class DevelopersController < ApplicationController
    before_action :find_dev, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: :index

    # shows all game developers
    def index
        devs = Developer.all
        render json: devs
    end

    # shows a specific developer by params ID 
    def show
        render json: @dev
    end
    
    # create a new developer; throw an exception if failed; 
    def create
        dev = Developer.create!(dev_params)
        render json: dev, status: :created
    end

    # patch a specific developer by params ID; throw an exception if failed; developer stored in @user via find_dev private method
    def update
        @dev.update!(dev_params)
        render json: @dev
    end

    # delete developer; render nothing; developer to delete stored in @user via find_dev
    def destroy
        @dev.destroy
        head :no_content
    end

    private

    # stores specific developer found by params ID in @dev
    def find_dev
        @dev = Developer.find(params[:id])
    end
    
    # permits listed elements as params
    def dev_params
        params.permit(:name, :founding_year)
    end
end
