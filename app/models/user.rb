class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :asker_relationships, foreign_key: 'responder_id', class_name: 'Connection'
  has_many :askers, through: :asker_relationships, source: :asker

  has_many :responder_relationships, foreign_key: 'asker_id', class_name: 'Connection'
  has_many :responders, through: :responder_relationships, source: :responder
  has_many :trips

  def connect(user_id)
    responder_relationships.create(responder_id: user_id)
  end
end
