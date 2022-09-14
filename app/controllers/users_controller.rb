class UsersController < ApplicationController
    before_action :find_user, only: [:update, :destroy]
    skip_before_action :authorize, only: [:create, :index]
    
    # show all users
    def index
        users = User.all
        render json: users
    end

    # show specific user
    def show
        render json: @current_user
    end

    # create user
    def create   
        user = User.create!(user_params)
        session[:user_id] = user.id
     
        render json: user, status: :created
    end

    # patch user
    def update
        @user.update!(user_params)
        render json: @user
    end

    # delete user
    def destroy
        @user.destroy

        head :no_content
    end

    private

    # permits all listed elements as params
    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :user)
    end
    # grabs the specific user by ID and stores it in @user 
    def find_user
        @user = User.find(params[:id])
    end
end
