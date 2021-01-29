class HomeController < ApplicationController
  def index
    @books = Book.all()
    # url = "http://localhost:3000/reports_kit/reports.json?report_params[key]=my_reports_series&properties={}"
    # url = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json"

    String name_raport =""
    # name_report = "my_reports_series"
    # name_report = "my_reports_filters3"
    # name_report = "my_reports_order_by"
    name_report = "my_reports_overview2"
    # name_report = "my_reports_numbers"


    dane = get_repotrs_kit_json(get_name_report(name_report))
    puts dane

    puts "Dane z raportu"


  end

  def get_name_report(name_report)
    return "http://localhost:3000/reports_kit/reports.json?report_params[key]=" + name_report + "&properties={}"
  end

  def data_to_javascript(dane)
    str = dane.to_s.slice(dane.to_s.index("\"labels")..dane.to_s.index("}}}"))
    str = str.gsub!("=>", ":")
    return str
  end

  def get_repotrs_kit_json(url)
    resp = Net::HTTP.get_response(URI.parse(url))
    data = JSON.parse(resp.body)
    return data_to_javascript(data)
  end
end
