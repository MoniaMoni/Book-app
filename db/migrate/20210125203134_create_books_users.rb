class CreateBooksUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :books_users do |t|
      t.references :book, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end

    Book.all.each do |book|
      BooksUser.create(book_id: book.id, user_id: book.user_id)
    end

  end
end
