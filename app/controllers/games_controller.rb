class GamesController < ApplicationController
    before_action :find_game, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index]

    # unspecified status code defaults to ok

    # show all games
    def index
        games = Game.all
        render json: games
    end

    # shows specific game by params ID
    def show
        render json: @game
    end

    # creates new game; exception thrown if failed; params permitted via private method game_params
    def create
        game = Game.create!(game_params)
        render json: game, status: :created
    end

    # patches a game; exception thrown if failed; params permitted via private method game_params
    def update
        @game.update!(game_params)
        render json: @game
    end

    # deletes a specific game by params ID
    def destroy
        @game.destroy

        head :no_content
    end

    private

    # permits listed elements as params 
    def game_params
        params.permit(:name, :release_year, :genre, :multiplayer, :image, :platform, :developer_id)
    end

    # grabs specific user by params ID and stores it in @game
    def find_game
        @game = Game.find(params[:id])
    end
end
