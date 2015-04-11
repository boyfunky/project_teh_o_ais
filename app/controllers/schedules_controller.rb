require 'json'
class SchedulesController < ApplicationController
  
  def save_schedules

    ap "im here in schedules"
    ap params

    cleaning_schedule = Schedule.new
    cleaning_schedule.package_id = params[:package_id]
    cleaning_schedule.location_id = params[:location_id]

    if cleaning_schedule.valid?
      cleaning_schedule.save
      @schedule_id = cleaning_schedule.id
    end
    # #@result = Package.group(:start_time, :end_time, :day_id).count
    # @result = Package.joins(:time_slot, :package_category, :service)
    #   .select("packages.id, packages.resource_quantity, time_slots.start_time as package_start_time, time_slots.end_time as package_end_time, packages.day_id, package_categories.name as package_category_name, services.name as service_name")
    #   .where("packages.location_id = ? and packages.service_id = ?", params[:location_id], params[:service_id])
    #   .group(:start_time, :end_time);
    # ap @result
    
    respond_to do |format|
      format.json { render :json => @schedule_id, :callback => params[:callback]  }
    end
  end
  
end