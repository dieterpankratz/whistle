puts 'Cleaning database...'
Connection.destroy_all
Alert.destroy_all
Trip.destroy_all
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

puts 'Creating trips...'
trip_1 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_2 = Trip.create!(user_id: user_2.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.542751, end_long: 13.423660, start_point: "Berlin", end_point: "Berlin")
trip_3 = Trip.create!(user_id: user_3.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.510810, end_long: 13.457460, start_point: "Berlin", end_point: "Berlin")
trip_4 = Trip.create!(user_id: user_4.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.520008, end_long: 13.404954, start_point: "Berlin", end_point: "Berlin")
trip_5 = Trip.create!(user_id: user_5.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_6 = Trip.create!(user_id: user_6.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_7 = Trip.create!(user_id: user_7.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_8 = Trip.create!(user_id: user_8.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_9 = Trip.create!(user_id: user_9.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_10 = Trip.create!(user_id: user_10.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")

puts 'Trips created!'

puts 'Finished!'
