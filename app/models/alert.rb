class Alert < ApplicationRecord
  PERMITTED_KINDS = ["share", "whistle"]
  belongs_to :user
  belongs_to :trip
  has_many :responses

  validates :kind, inclusion: { in: PERMITTED_KINDS }
end
