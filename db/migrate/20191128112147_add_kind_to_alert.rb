class AddKindToAlert < ActiveRecord::Migration[5.2]
  def change
    add_column :alerts, :kind, :string
    add_reference :alerts, :trip, foreign_key: true
  end
end
