class MyDataMethods2
	# { 'Bernice' => 191, 'Carlee' => 160, 'Edison' => 60, ... }
	def self.books_by_author(properties)
		Book.group('books.edition').order('books.edition').count
	end

end