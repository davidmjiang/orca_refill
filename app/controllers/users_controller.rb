class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if(@user.save)
			session[:user_id] = @user.id
			redirect_to @user
		else
			flash[:alert] = "There was a problem creating your account. Please try again."
			render :new
		end
	end

	def show
		if session[:user_id] && session[:user_id] == params[:id].to_i
			@user = current_user
		else
			redirect_to log_in_path
		end
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :username, :phone)
	end
end
