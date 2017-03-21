class SessionsController < ApplicationController
	def new
	end

	def create
		@user = User.authenticate(params[:username], params[:password])
		if @user
			session[:user_id] = @user.id
			redirect_to @user
		else
			flash[:alert] = "There was a problem logging you in"
			redirect_to log_in_path
		end 
	end

	def destroy
		session[:user_id] = nil
		redirect_to "/"
	end
end
