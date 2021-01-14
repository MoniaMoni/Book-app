class AddGenreToBooks < ActiveRecord::Migration[6.0]
  def change
    add_reference :books, :genre, null: false, foreign_key: true, default: 1
  end
end
