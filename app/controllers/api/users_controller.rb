require "open-uri"

class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        # debugger
        # image will change on reseed
        file = open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/waterdrop1.png")
        # debugger
        @user.avi_photo.attach(io: file, filename: "#{@user.first_name}.png")
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
    end


    private
    def user_params
        params.require(:user).permit(
            :first_name, :last_name, :email, :zipcode, :password
        )
    end


end
