module ApplicationHelper
  def chart(title = nil)
    line_chart Book.all.group(title).count
  end
end
