# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

puts "Destroying old data..."

Location.destroy_all

puts "Creating locations..."

CSV.foreach('formatted_results.csv', {headers: true}) do |row|
	Location.create({name: row[0], address: row[1].strip})
	sleep(0.2) #rate limiting for geocoding
end

puts "Done!"