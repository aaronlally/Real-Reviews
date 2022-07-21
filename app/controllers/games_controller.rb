class GamesController < ApplicationController
    before_action :find_game, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index]

    def index
        games = Game.all
        render json: games
    end

    def show
        render json: @game
    end

    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    def update
        @game.update!(game_params)
        render json: @game
    end

    def destroy
        @game.destroy

        head :no_content
    end

    private

    def game_params
        params.permit(:name, :release_year, :genre, :multiplayer, :image, :platform, :developer_id)
    end

    def find_game
        @game = Game.find(params[:id])
    end
end
