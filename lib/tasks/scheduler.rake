desc "This task is called by the Heroku scheduler add-on"
task :update_cards => :environment do
	puts "Updating cards..."
	Card.update_task
	puts "Done"
end