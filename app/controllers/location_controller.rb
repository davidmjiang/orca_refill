class LocationController < ApplicationController
	def index
		@locations = Location.all
	end

	def closest
		locations = Location.get_closest(params[:q])
		respond_to do |format|
			format.json{ render json: locations}
		end
	end
end
