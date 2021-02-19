require 'faker'

# Genre.create name: "Fantasy"
# Genre.create name: "Sci-Fi"
# Genre.create name: "Mystery"
# Genre.create name: "Thriller"
# Genre.create name: "Romance"
# Genre.create name: "Westerns"
# Genre.create name: "Contemporary"
#
# 1.times do
#   User.create!(
#     email: Faker::Internet.email,
#     password: 'password'
#   )
# end
#
# 13.times do
#   User.where(id: rand(12..12)).each do |user|
#     user.books.create!(
#       title: Faker::Book.title,
#       author: Faker::Book.author,
#       description: Faker::Books::Dune.quote,
#       year_of_publishment: (Faker::Number.between(from: 1900, to: 2021)).to_s,
#       genre_id: rand(1..7),
#       edition: %w[Paper Ebook Audiobook].sample
#     )
#   end
# end
Report.create! name:'my_reports', description:'Amount of books per user'
Report.create! name:'my_reports2', description:'Books genre'
Report.create! name:'my_reports_filters2', description:'Date of adding the book'
Report.create! name:'my_reports_series', description:'Number of books by genre and date of addition'