class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer 'asker_id', null: false
      t.integer 'responder_id', null: false

      t.timestamps null: false
    end

    add_index :connections, :asker_id
    add_index :connections, :responder_id
    add_index :connections, [:asker_id, :responder_id], unique: true
  end
end
