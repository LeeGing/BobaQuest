class AllstoresController < ApplicationController
  def show
    allstores = Store.all;;
    render json: allstores
  end

end
