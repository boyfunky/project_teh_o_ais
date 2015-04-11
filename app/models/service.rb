class Service < ActiveRecord::Base
	attr_accessible :name
	has_many :packages, :dependent => :destroy
end
