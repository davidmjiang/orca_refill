class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.float :balance
      t.string :name
      t.integer :serial_num
      t.integer :verification_num
      t.float :reminder_amount
      t.integer :user_id

      t.timestamps
    end
  end
end
