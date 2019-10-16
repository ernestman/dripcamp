class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def index
        @reviews = Review.all
    end

    def show
        @review = Review.find(params[:id])
    end

    def destroy
        @review = Review.find(params[:id])

        @review.destroy

        render json: @review
    end


    private
    def review_params
        params.require(:review).permit(
            :author_id, :campground_id, :body
        )
    end 



end
