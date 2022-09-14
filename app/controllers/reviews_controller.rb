class ReviewsController < ApplicationController
    before_action :find_review, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index]

    # unspecified status defaults to ok
    # show all reviews
    def index
        reviews = Review.all
        render json: reviews
    end

    # show specific review; stored in @review in private method find_review
    def show
        render json: @review
    end

    # creates a new review; review params permitted are set in review_params private method; exclamation point throws an exception if unable to complete. 
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    # patch a specific review by id; this specific review is stored in @review via private method find_review
    def update
        @review.update!(review_params)
        render json: @review
    end

    # destroy a specific review by id; this specific review is stored in @review via private method find_review, renders nothing
    def destroy
        @review.destroy

        head :no_content
    end

    private
    # permits listed elements as params 
    def review_params
        params.permit(:title, :content, :user_id, :game_id, :date)
    end

    # stores specific review by params ID in @review variable
    def find_review
        @review = Review.find(params[:id])
    end
end
