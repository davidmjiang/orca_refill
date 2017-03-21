class UsersController < ApplicationController
	def new
	end

	def create
		@user = User.new(user_params)
		if(@user.save)
			session[:user_id] = @user.id
			redirect_to @user
		else
			flash[:alert] = "There was a problem creating your account. Please try again."
			redirect_to :back
		end
	end

	def show
		#before action: check session_id === params[:id]
		@user = current_user
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :username, :phone)
	end
end
