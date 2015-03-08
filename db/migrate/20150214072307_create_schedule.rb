class CreateSchedule < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      
      t.integer :account_id
      t.date    :service_date
      t.integer :company_id
      t.time    :start_time
      t.time    :end_time
      t.integer :employees
      t.integer :location_id
      t.string  :status
      t.string  :feedback
      t.decimal :transaction_amount
      t.timestamps     
    end
  end
end
