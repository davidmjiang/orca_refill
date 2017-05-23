class Distance
include Math
# Earth radius in km
EARTH_RADIUS = 6371

def self.get_distance(p1, p2)
	lat1 = to_radians(p1[:latitude])
	lat2 = to_radians(p2[:latitude])
	long1 = to_radians(p1[:longitude])
	long2 = to_radians(p2[:longitude])
	d_lat = lat2 - lat1
	d_long = long2 - long1

	a = Math.sin(d_lat/2) * Math.sin(d_lat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(d_long/2) * Math.sin(d_long/2)
	c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
	d = EARTH_RADIUS * c
	return to_miles(d).round(2)
end

private

def self.to_radians(deg)
	deg * PI/180
end

def self.to_miles(km)
	km * 0.621371
end

end