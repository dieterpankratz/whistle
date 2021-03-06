puts 'Cleaning database...'
Alert.destroy_all
Trip.destroy_all
Connection.destroy_all
Response.destroy_all
User.destroy_all
puts 'Creating users...'
user_1 = User.create!(name: "Chloé", email: "user_1@example.com", password: "123456", username: "Baba", phone_number: "+33640377827")
user_2 = User.create!(name: "Chloé", email: "user_5@example.com", password: "123456", username: "Lyn", phone_number: "+4915786608080")
user_3 = User.create!(name: "Thomas", email: "user_3@example.com", password: "123456", username: "Tomtom")
user_4 = User.create!(name: "Dieter", email: "user_4@example.com", password: "123456", username: "Didi")
user_5 = User.create!(name: "Morgane", email: "user_2@example.com", password: "123456", username: "Momo")
user_6 = User.create!(name: "Dimitri", email: "user_6@example.com", password: "123456", username: "Dimi")
user_7 = User.create!(name: "Isabelle", email: "user_7@example.com", password: "123456", username: "Isa")
user_8 = User.create!(name: "Santiago", email: "user_8@example.com", password: "123456", username: "Santi")
user_9 = User.create!(name: "Antoinette", email: "user_9@example.com", password: "123456", username: "Toni")
user_10 = User.create!(name: "Andrey", email: "user_10@example.com", password: "123456", username: "Andy")
puts 'Users created!'
puts 'Creating trips...'
trip_1 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
trip_2 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.542751, end_long: 13.423660, start_point: "Berlin", end_point: "Berlin")
trip_3 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.510810, end_long: 13.457460, start_point: "Berlin", end_point: "Berlin")
trip_4 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.520008, end_long: 13.404954, start_point: "Berlin", end_point: "Berlin")
trip_5 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.491290, end_long: 13.416200, start_point: "Berlin", end_point: "Berlin")
trip_6 = Trip.create!(user_id: user_1.id, start_lat: 52.506890, start_long: 13.391410, end_lat: 52.477030, end_long: 13.420550, start_point: "Berlin", end_point: "Berlin")
puts 'Trips created!'
puts 'Creating connections...'
connection_1 = Connection.create!(asker_id: user_1.id, responder_id: user_2.id)
connection_2 = Connection.create!(asker_id: user_1.id, responder_id: user_3.id)
connection_3 = Connection.create!(asker_id: user_1.id, responder_id: user_4.id)
connection_4 = Connection.create!(asker_id: user_1.id, responder_id: user_5.id)
connection_5 = Connection.create!(asker_id: user_1.id, responder_id: user_6.id)
puts 'Connections created!'
puts 'Creating alerts...'
alert_1 = Alert.create!(user_id: user_1.id, lat: 52.510365, long: 13.389967, trip_id: trip_1.id, kind: "share")
alert_2 = Alert.create!(user_id: user_1.id, lat: 52.493835, long: 13.387999, trip_id: trip_2.id, kind: "whistle")
# alert_3 = Alert.create!(user_id: user_1.id, lat: 52.502342, long: 13.394953)
# alert_4 = Alert.create!(user_id: user_1.id, lat: 52.502087, long: 13.417193)
# alert_5 = Alert.create!(user_id: user_1.id, lat: 52.499359, long: 13.418920)
puts 'Alerts created!'
puts 'Creating responses...'
user_1.responders.each do |responder|
  Response.create(user: responder, alert: alert_1, lat: 52.529968, long: 13.400718)
end
puts 'Responses created!'

puts 'Finished!'
