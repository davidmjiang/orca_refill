class UserMailer < ApplicationMailer
	default from: 'no-reply@orcarefill.com'

	def reminder(user, card)
		@user = user
		@card_num = card.serial_num
		@balance = card.balance
		mail(to: @user.email, subject: "Your ORCA balance reminder")
	end
end
