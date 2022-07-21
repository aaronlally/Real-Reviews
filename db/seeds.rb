puts "🏕 Seeding..."

User.destroy_all
Game.destroy_all
Developer.destroy_all
Review.destroy_all

# ActiveRecord::Base.connection.tables.each do |t|
#     ActiveRecord::Base.connection.reset_pk_sequence!(t)
#   end

10.times.each do 
User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Internet.username, password: "12345", password_confirmation: "12345")
end

blizz = Developer.create(name: "Blizzard Entertainment", founding_year: 1991)
valve = Developer.create(name: "Valve Corporation", founding_year: 1996)
ubisoft = Developer.create(name: "Ubisoft", founding_year: 1986)
bungie = Developer.create(name: "Bungie Inc", founding_year: 1991)
act = Developer.create(name: "Activision", founding_year: 1979)
epic = Developer.create(name: "Epic Games", founding_year: 1991)
nintendo = Developer.create(name: "Nintendo", founding_year: 1889)
insom = Developer.create(name: "Insomniac Games", founding_year: 1994)



game1 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: true, platform: Faker::Game.platform, developer_id: blizz.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game2 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: false, platform: Faker::Game.platform, developer_id: valve.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game3 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: false, platform: Faker::Game.platform, developer_id: ubisoft.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game4 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: false, platform: Faker::Game.platform, developer_id: bungie.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game5 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: false, platform: Faker::Game.platform, developer_id: act.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game6 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: true, platform: Faker::Game.platform, developer_id: epic.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game7 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: true, platform: Faker::Game.platform, developer_id: insom.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")

game8 = Game.create!(name: Faker::Game.title, release_year: rand(1980..2022), genre: Faker::Game.genre, multiplayer: true, platform: Faker::Game.platform, developer_id: nintendo.id, image: "https://cdn.vox-cdn.com/thumbor/vkdYvfcM_2BU6lMw5tLrwfQ0ovQ=/0x0:1020x680/920x613/filters:focal(429x259:591x421):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64915557/2013-11-22_13-13-07.0.jpg")



Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game1.id, date: "1/1/2022")
Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game2.id, date: "1/1/2022")
Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game3.id, date: "1/1/2022")
Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game4.id, date: "1/1/2022")
Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game5.id, date: "1/1/2022")
Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game6.id, date: "1/1/2022")
Review.create(title: "seeded review", content: "seeded review content", user_id: rand(131..141), game_id: game7.id, date: "1/1/2022")



puts "DONE SEEDING"

