require "#{Rails.root}/lib/get_directions"

class Location < ApplicationRecord
	geocoded_by :address
	after_validation :geocode
end
