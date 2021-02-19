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
    @reports = Report.all


    # kind = params[:kind].presence ||
    # @chart_type = @chart_types[kind.to_i-1].name

    @chart_type = ChartType.find(params[:kind] || 1)&.name
    # @chart_type = ChartType.find(params[:kind] || 1)&.name


    # rep = params[:rep].presence || 0
    # @report = @reports[rep.to_i].name

    @report = Report.find(params[:rep] || 1)&.name
    @description = Report.find(params[:rep] || 1)&.description

    # if params[:q].present?
    #   @text = "hello #{params[:q]}!"
    # end
  end

end
