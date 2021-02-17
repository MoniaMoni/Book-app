class HomeController < ApplicationController
  def index

    @books = Book.paginate(:page => params[:page], per_page: 10)

    # @data = "my_reports"
    # @data = "my_reports2"
    # @data = "my_reports_order_by2"
    # @data = "my_reports_series"

    # Pobierannie parametrów z listy

    # chart_type = ['bar', 'doughnut', 'pie', 'line']
    # kind = params[:kind].presence #|| 0
    #
    # @chart_type = chart_type[kind.to_i]
    # #
    # data = ['my_reports', 'my_reports2', 'my_reports_filters2', 'my_reports_series']
    # rep = params[:rep].presence
    #
    # @data = data[rep.to_i]

    # pobieranie parametrów z tabeli

    @chart_types = ChartType.all
    kind = params[:kind].presence #|| 0

    @chart_type = @chart_types[kind.to_i].name


    @reports = Report.all
    rep = params[:rep].presence

    @data = @reports[rep.to_i].name

    if params[:q].present?
      @text = "hello #{params[:q]}!"
    end
  end

end
