class Trip < ApplicationRecord
  belongs_to :user
  geocoded_by :end_point, latitude: :end_lat, longitude: :end_long
  after_validation :geocode, if: :will_save_change_to_end_point?
end
