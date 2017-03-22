class Card < ApplicationRecord
	belongs_to :user

	validates :name, presence: true
	validates :serial_num, presence: true, numericality: true, length: {is: 8}
	validates :verification_num, presence: true, numericality: true, length: {is: 3}
	validates :reminder_amount, presence: true,
	numericality: {greater_than_or_equal_to: 0 }

	# def encrypt(serial, verfication)
	# 	@@crypt = ActiveSupport::MessageEncryptor.new(Rails.application.secrets.secret_key_base)
	# 	encrypted_serial = @@crypt.encrypt_and_sign(serial)
	# end

	def get_balance
		agent = Mechanize.new
		page = agent.get("https://www.orcacard.com/ERG-Seattle/p4_017.do")
		form = page.form('p4_006Form')
		form.cardNumber = self.serial_num
		form.cardVerificationNumber = self.verification_num
		page2 = agent.submit(form, form.buttons.first)
		# check for errors
		if(page2.search(".error").length > 0)
			return false
		end
		form2 = page2.form('p7_025Form')
		page3 = agent.submit(form2, form2.buttons.first)
		balance = page3.search('td').children.first.text
		balance = balance[1..-1].to_f
		self.update({balance: balance})
	end

	def self.update_task
		@cards = Card.all
		@cards.each do |card|
			balance = @card.get_balance
			if balance && (balance <= @card.reminder_amount)
				@card.send_reminder
			end
		end
	end
end
