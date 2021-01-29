require 'faker'

# Genre.create name: "Fantasy"
# Genre.create name: "Sci-Fi"
# Genre.create name: "Mystery"
# Genre.create name: "Thriller"
# Genre.create name: "Romance"
# Genre.create name: "Westerns"
# Genre.create name: "Contemporary"

1.times do
  User.create!(
    email: Faker::Internet.email,
    password: 'password'
  )
end

13.times do
  User.where(id: rand(12..12)).each do |user|
    user.books.create!(
      title: Faker::Book.title,
      author: Faker::Book.author,
      description: Faker::Books::Dune.quote,
      # user_id: 1,
      year_of_publishment: (Faker::Number.between(from: 1900, to: 2021)).to_s,
      genre_id: rand(1..7),
      edition: %w[Paper Ebook Audiobook].sample
    )
  end
end