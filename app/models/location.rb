require "#{Rails.root}/lib/get_distance"
require "#{Rails.root}/lib/max_heap"

class Location < ApplicationRecord
	geocoded_by :address
	after_validation :geocode

	NUM_RESULTS = 5

	def self.get_closest(long, lat)
		# get closest results
		# uses maxheap
		query = {longitude: long.to_f, latitude: lat.to_f}
		top5 = Maxheap.new(NUM_RESULTS, "distance")
		Location.all.each do |loc|
			dist = Distance.get_distance(loc, query)
			top5.add({location: loc, distance: dist})
		end
		return top5.elements
	end

end
