# frozen_string_literal: true

class Api::V1::OrdersController < ApplicationController
  before_action :find_order, only: [:show]
  skip_before_action :verify_authenticity_token

  # GET /api/v1/orders
  def index
    @orders = Order.all

    render json: @orders
  end

  def show
    render json: @order
  end

  def create
    @order = Order.new

    if order_params[:email].blank?
      render json: { error: 'Unable to create order. Missing email' }, status: 400
      return
    elsif order_params[:products].blank?
      render json: { error: 'Unable to create order. No products given' }, status: 400
      return
    end

    email = order_params[:email]
    first_name = order_params[:first_name]
    last_name = order_params[:last_name]

    @customer = Customer.find_by(email: email)

    if @customer.blank?
      @customer = Customer.new
      @customer.email = email
      @customer.first_name = first_name if first_name.present?
      @customer.last_name = last_name if last_name.present?

      unless @customer.save
        render json: { error: 'Unable to create new customer' }, status: 400
        return
      end
    end

    products = order_params[:products]

    @order.total = 100
    @order.customer = @customer
    @order.status = Order::PROCESSING

    if @order.save
      products.each do |product|
        productId = product.first.to_i
        product = Product.find_or_create_by(id: productId)
        @order.products << product
      end
    else
      render json: { error: 'Unable to create order' }, status: 400
      return
    end
    render json: { order: @order }, status: 200
  end

  private

  def find_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:first_name, :last_name, :email, products: {})
  end
end
