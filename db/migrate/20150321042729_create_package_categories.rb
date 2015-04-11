class CreatePackageCategories < ActiveRecord::Migration
  def change
    create_table :package_categories do |t|
    	t.string	:name

      t.timestamps
    end
  end
end
