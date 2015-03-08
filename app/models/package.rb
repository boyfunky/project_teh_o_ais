class Package < ActiveRecord::Base
  #attr_accessible :company_id, :start_time, :end_time, :location_id, :service_id, :day_id, :no_employee, :is_booked
  # default_scope { SELECT("start_time, end_time")("date_published DESC") }
  #scope :, lambda { where("language = 'en' and status = 'published'") }

    #SELECT start_time, end_time, COUNT(*) FROM lets_schedule_com_my_development.packages GROUP BY start_time, end_time;
    #Package.group(:start_time, :end_time, :day_id).count
end