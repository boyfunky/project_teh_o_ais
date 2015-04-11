class ChangeTimeSlotFormatInPackages < ActiveRecord::Migration
  def up
    change_column :packages, :time_slot_id, :integer
    change_column :packages, :day_id, :integer
    change_column :packages, :resource_quantity, :integer
  end

  def down
    change_column :packages, :time_slot_id, :time
    change_column :packages, :day_id, :string
    change_column :packages, :resource_quantity, :string
  end
end
