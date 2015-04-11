class CreatePackages < ActiveRecord::Migration
  def change
    create_table :packages do |t|
    	t.integer :company_id
      t.time    :time_slot_id
      t.integer :location_id
      t.integer :service_id
      t.string  :day_id
      t.string  :resource_quantity
      t.integer	:package_category_id
      t.boolean :is_booked, :default => false

      t.timestamps
    end
  end
end
