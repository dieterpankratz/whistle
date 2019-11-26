puts 'Cleaning database...'
Connection.destroy_all
Trip.destroy_all
Alert.destroy_all
Response.destroy_all
User.destroy_all

puts 'Creating users...'
user_1 = User.create!(name: "Thomas", email: "user_1@example.com", password: "123456", username: "Tomtom")
user_2 = User.create!(name: "Chloé", email: "user_2@example.com", password: "123456", username: "Baba")
user_3 = User.create!(name: "Dieter", email: "user_3@example.com", password: "123456", username: "Didi")
user_4 = User.create!(name: "Lyndsey", email: "user_4@example", password: "123456", username: "Lyn")
user_5 = User.create!(name: "Morgane", email: "user_5@example.com", password: "123456", username: "Momo")
user_6 = User.create!(name: "Dimitri", email: "user_6@example.com", password: "123456", username: "Dimi")
user_7 = User.create!(name: "Isabelle", email: "user_7@example.com", password: "123456", username: "Isa")
user_8 = User.create!(name: "Santiago", email: "user_8@example.com", password: "123456", username: "Santi")
user_9 = User.create!(name: "Antoinette", email: "user_9@example.com", password: "123456", username: "Toni")
user_10 = User.create!(name: "Andrey", email: "user_10@example.com", password: "123456", username: "Andy")

puts 'Users created!'
