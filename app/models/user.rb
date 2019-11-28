class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :asker_relationships, foreign_key: 'responder_id', class_name: 'Connection'
  has_many :askers, through: :asker_relationships, source: :asker

  has_many :responder_relationships, foreign_key: 'asker_id', class_name: 'Connection'
  has_many :responders, through: :responder_relationships, source: :responder

  has_many :alerts
  has_many :trips
  has_many :responses

  scope :all_except, ->(user) { where.not(id: user) }

  def connect(user_id)
    responder_relationships.create(responder_id: user_id)
  end

  def unconnect(user_id)
    responder_relationships.find_by(responder_id: user_id).destroy
  end

  def connected_users
    # all the ids of users we connected with already
    askers = self.askers.pluck(:username)
    responders = self.responders.pluck(:username)
    users = askers + responders
    return users.uniq
  end

  def connections
    users = self.askers + self.responders
    return users.uniq
  end
end
