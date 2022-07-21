class ReviewsController < ApplicationController
    before_action :find_review, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index]

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        render json: @review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        @review.update!(review_params)
        render json: @review
    end

    def destroy
        @review.destroy

        head :no_content
    end

    private

    def review_params
        params.permit(:title, :content, :user_id, :game_id, :date)
    end

    def find_review
        @review = Review.find(params[:id])
    end
end
