class Package < ActiveRecord::Base
	attr_accessible :company_id, :time_slot_id, :location_id, :service_id, :day_id, :resource_quantity, :package_category_id, :time_slot, :is_booked
	belongs_to :time_slot
	belongs_to :package_category
	belongs_to :service
end
