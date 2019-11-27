puts 'Cleaning database...'
Connection.destroy_all
Alert.destroy_all
Response.destroy_all
User.destroy_all
Trip.destroy_all

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

puts 'Creating trips...'
trip_1 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_2 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_3 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_4 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_5 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_6 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_7 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_8 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_9 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_10 = Trip.create!(start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")

puts 'Trips created!'

# puts "testing"
# trip_1.user = user_1
# puts "user_1"
# trip_2.user = user_2
# puts "user_2"
# trip_3.user = user_3
# puts "user_3"
# trip_4.user = user_4
# puts "user_4"
# trip_5.user = user_5
# puts "user_5"
# trip_6.user = user_6
# puts "user_6"
# trip_7.user = user_7
# puts "user_1"
# trip_8.user = user_8
# puts "user_2"
# trip_9.user = user_9
# puts "user_3"
# trip_10.user = user_10

puts 'Finished!'
