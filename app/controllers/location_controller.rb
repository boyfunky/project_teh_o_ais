require 'json'
class LocationController < ApplicationController
	 def get_locations

    @locations = Location.all;
    
    respond_to do |format|
      format.json { render :json => @locations, :callback => params[:callback]  }
    end
  end
end
