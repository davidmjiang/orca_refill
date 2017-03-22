class AddReminderMethodsToCards < ActiveRecord::Migration[5.0]
  def change
  	add_column :cards, :email_reminder, :boolean
  	add_column :cards, :text_reminder, :boolean
  end
end
