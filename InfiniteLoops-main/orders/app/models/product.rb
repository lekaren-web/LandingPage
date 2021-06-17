# frozen_string_literal: true

class Product < ApplicationRecord
  has_many :products_orders
  has_many :orders, through: :product_orders
end
