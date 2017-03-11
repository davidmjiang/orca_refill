class Location < ActiveRecord::Migration[5.0]
  def change
  	create_table :locations do |t|
  		t.string :name
  		t.string :address
  		t.decimal :latitude
  		t.decimal :longitude
  		t.timestamps
  	end
  end
end
