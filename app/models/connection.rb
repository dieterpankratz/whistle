class Connection < ApplicationRecord
  belongs_to :asker, foreign_key: 'asker_id', class_name: 'User'
  belongs_to :responder, foreign_key: 'responder_id', class_name: 'User'
end
