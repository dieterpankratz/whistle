puts 'Cleaning database...'
Alert.destroy_all
Trip.destroy_all
Connection.destroy_all
Response.destroy_all
User.destroy_all

puts 'Creating users...'
user_1 = User.create!(name: "Chloé", email: "user_1@example.com", password: "123456", username: "Baba", phone_number: "+4915786608080")
user_2 = User.create!(name: "Morgane", email: "user_2@example.com", password: "123456", username: "Momo", phone_number: "+4917659143289")
user_3 = User.create!(name: "Thomas", email: "user_3@example.com", password: "123456", username: "Tomtom")
user_4 = User.create!(name: "Dieter", email: "user_4@example.com", password: "123456", username: "Didi")
user_5 = User.create!(name: "Lyndsey", email: "user_5@example.com", password: "123456", username: "Lyn")
user_6 = User.create!(name: "Dimitri", email: "user_6@example.com", password: "123456", username: "Dimi")
user_7 = User.create!(name: "Isabelle", email: "user_7@example.com", password: "123456", username: "Isa")
user_8 = User.create!(name: "Santiago", email: "user_8@example.com", password: "123456", username: "Santi")
user_9 = User.create!(name: "Antoinette", email: "user_9@example.com", password: "123456", username: "Toni")
user_10 = User.create!(name: "Andrey", email: "user_10@example.com", password: "123456", username: "Andy")

puts 'Users created!'

puts 'Creating trips...'
trip_1 = Trip.create!(user: user_1, start_point: "Checkpoint Charlie, Berlin", end_point: "Alexanderplatz, Berlin")
# trip_2 = Trip.create!(user_id: user_1.id, start_point: "Berlin", end_point: "Berlin")
# trip_3 = Trip.create!(user_id: user_1.id, start_point: "Berlin", end_point: "Berlin")
# trip_4 = Trip.create!(user_id: user_1.id, start_point: "Berlin", end_point: "Berlin")
# trip_5 = Trip.create!(user_id: user_1.id, start_point: "Berlin", end_point: "Berlin")
# trip_6 = Trip.create!(user_id: user_1.id, start_point: "Berlin", end_point: "Berlin")
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
  Response.create(user: responder, alert: alert_1, long: 13.410502, lat: 52.502385)
end
puts 'Responses created!'


puts 'Finished!'
