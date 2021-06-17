# frozen_string_literal: true

class ProductOrder < ActiveRecord::Migration[5.2]
  def change
    create_table :product_orders, id: false do |t|
      t.integer :product_id
      t.integer :order_id
    end
  end
end
