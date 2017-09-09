class StoresController < ApplicationController
  def show
    stores = Store.all
    render json: stores
  end
end
