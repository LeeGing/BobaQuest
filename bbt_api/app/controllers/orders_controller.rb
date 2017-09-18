
class OrdersController < ApplicationController
	def index
		@orders = Order.all
		render json: @orders
	end

	def show
		@orders = Order.where(store_id: params[:id])
		render json: @orders
	end

	def create
		@order = params[:order]
    @user = params[:user]
    @store = params[:store]
		@orderdata = Order.new(order: @order, user_id: @user, store_id: @store)
		@orderdata.save;
  end
end
