class UsersController < ApplicationController
    before_action :find_user, only: [:update, :destroy]
    skip_before_action :authorize, only: [:create, :index]
    
    def index
        users = User.all
        render json: users
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        @user.destroy

        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :user)
    end

    def find_user
        @user = User.find(params[:id])
    end
end
