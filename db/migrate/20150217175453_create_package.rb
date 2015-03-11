class CreatePackage < ActiveRecord::Migration
  def change
    create_table :packages do |t|
      t.integer :company_id
      t.time    :start_time
      t.time    :end_time
      t.integer :location_id
      t.integer :service_id
      t.string  :day_id
      t.string  :no_employee
      t.boolean :is_booked, :default => false 
    end
  end
end
