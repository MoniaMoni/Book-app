class AddEditionToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :edition, :string
  end
end
