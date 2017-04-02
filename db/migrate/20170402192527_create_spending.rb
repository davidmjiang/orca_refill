class CreateSpending < ActiveRecord::Migration[5.0]
  def change
    create_table :spendings do |t|
    	t.float :amount
    	t.integer :card_id
    	t.timestamps
    end
  end
end
