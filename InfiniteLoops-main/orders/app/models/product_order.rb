# frozen_string_literal: true

class ProductOrder < ApplicationRecord
  belongs_to :order
  belongs_to :product
end
