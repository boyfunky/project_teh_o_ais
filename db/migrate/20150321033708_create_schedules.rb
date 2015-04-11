class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
    	t.integer :user_id
      t.date    :service_date
      t.integer :company_id
      t.integer :time_slot_id
      t.integer :employees
      t.integer :location_id
      t.string  :status
      t.string  :feedback
      t.decimal :transaction_amount
      t.integer	:package_category_id
      t.integer	:package_id
      t.timestamps
    end
  end
end
