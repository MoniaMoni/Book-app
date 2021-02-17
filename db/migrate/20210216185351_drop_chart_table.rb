class DropChartTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :charts
  end
end
