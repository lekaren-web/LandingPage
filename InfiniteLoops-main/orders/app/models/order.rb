# frozen_string_literal: true

class Order < ApplicationRecord
  belongs_to :customer
  has_many :product_orders
  has_many :products, through: :product_orders

  PROCESSING = 'processing'
  COMPLETE = 'complete'
  CANCELLED = 'cancelled'
end
