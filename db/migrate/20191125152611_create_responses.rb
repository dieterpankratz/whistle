class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.float :long
      t.float :lat
      t.references :user, foreign_key: true
      t.references :alert, foreign_key: true

      t.timestamps
    end
  end
end
