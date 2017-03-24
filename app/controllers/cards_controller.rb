class CardsController < ApplicationController
	def new
		@card = Card.new
	end

	def create
		#encrypt serial and verification nums
		@card = Card.new(card_params)
		@card.user_id = current_user.id
		if(@card.save)
			@card.get_balance
			redirect_to current_user
		else
			render :new
		end
	end

	def show
		@card = Card.find(params[:id])
	end

	private
	def card_params
		params.require(:card).permit(:name, :serial_num, :verification_num, :reminder_amount, :email_reminder, :text_reminder)
	end
end
