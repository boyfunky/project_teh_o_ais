require 'json'
class PackagesController < ApplicationController
  
  def result_packages
    
    #@result = Package.group(:start_time, :end_time, :day_id).count
    @result = Package.select("start_time, end_time, day_id, COUNT(*) as count").group(:start_time, :end_time);
    ap @result
    #SELECT start_time, end_time, COUNT(*) FROM lets_schedule_com_my_development.packages GROUP BY start_time, end_time;
    #Package.group(:start_time, :end_time, :day_id).count
    respond_to do |format|
      format.json { render :json => @result, :callback => params[:callback]  }
    end
  end
end