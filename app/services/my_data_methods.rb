class MyDataMethods
	# { 'Bernice' => 191, 'Carlee' => 160, 'Edison' => 60, ... }
	def self.books_by_author(properties)
		Book.group('books.title').order('books.title').count
	end

end