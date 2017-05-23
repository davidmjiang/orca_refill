class LocationController < ApplicationController
	def index
		@locations = Location.all
	end

	def closest
		if(params[:long] && params[:lat])
			locations = Location.get_closest(params[:long], params[:lat])
			respond_to do |format|
				format.json{ render json: locations}
			end
		else
			render nothing: true, status: 400
		end
	end
end
