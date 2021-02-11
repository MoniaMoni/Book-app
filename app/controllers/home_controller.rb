class HomeController < ApplicationController
  def index
    @books = Book.all()

    # @data = "my_reports"
    # @data = "my_reports2"
    # @data = "my_reports_order_by2"
    @data = "my_reports_series"

    chart_type = ['bar', 'doughnut', 'pie', 'line']
    kind = params[:kind].presence #|| 0

    @chart_type = chart_type[kind.to_i]

    if params[:q].present?
      @text = "hello #{params[:q]}!"
    end
  end

end
