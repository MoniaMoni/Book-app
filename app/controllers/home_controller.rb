class HomeController < ApplicationController
  def index
    @books = Book.all()

    @data = "my_reports_filters3"
  end

end
