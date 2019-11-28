class Trip < ApplicationRecord
  belongs_to :user
  geocoded_by :start_point, :end_point
  after_validation :geocode, if: :will_save_change_to_start_point?
  after_validation :geocode, if: :will_save_change_to_end_point?
end
