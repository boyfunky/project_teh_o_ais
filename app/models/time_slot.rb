class TimeSlot < ActiveRecord::Base
	attr_accessible :start_time, :end_time
	has_many :packages, :dependent => :destroy

end
