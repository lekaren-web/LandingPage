# frozen_string_literal: true

class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.decimal :total, precision: 15, scale: 2
      t.references :customer, foreign_key: true

      t.timestamps
    end
  end
end
