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
		@placeholder_data = {"2017-03-24" => 0,
			"2017-03-25" => 2.75,
			"2017-03-26" => 0, 
			"2017-03-27" => 5.50,
			"2017-03-28" => 2.75,
			"2017-03-29" => 2.75}
	end

	def edit
		@card = Card.find(params[:id])
	end

	def update
		@card = Card.find(params[:id])
		serial_num = @card.serial_num
		verification_num = @card.verification_num
		if @card.update(card_params)
				if serial_num != @card.serial_num || verification_num != @card.verification_num
					@card.get_balance
				end
				redirect_to current_user
		else
			render :edit
		end
	end

	private
	def card_params
		params.require(:card).permit(:name, :serial_num, :verification_num, :reminder_amount, :email_reminder, :text_reminder)
	end
end
