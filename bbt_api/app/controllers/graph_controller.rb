class GraphController < ApplicationController
  before_action :find_store

  def index
   totalBBTsale = Transaction.all.length
   totalTarosale = Inventory.where("drink_id = '1'").length + Inventory.where("drink_id = '3'").length
   totalLychesale = Inventory.where("drink_id = '2'").length + Inventory.where("drink_id = '4'").length
   totalStrBurnaby =  Store.where("location = 'Burnaby'").length
   totalStrRichmond =  Store.where("location = 'Richmond'").length
   storeTransaction = @store.inventories.joins(:transactions).length
   storeTaroSold = @store.inventories.where("drink_id = '1'").joins(:transactions).length
   storeLycheSold = @store.inventories.where("drink_id = '2'").joins(:transactions).length

   render json: {
                  totalSale: totalBBTsale,
                  totalTarosale: totalTarosale,
                  totalLychesale: totalLychesale,
                  totalStrBurnaby: totalStrBurnaby,
                  totalStrRichmond: totalStrRichmond,
                  storeTransaction: storeTransaction,
                  storeTaroSold: storeTaroSold,
                  storeLycheSold: storeLycheSold,
                }
  end

  def find_store
    @store = Store.find(params[:store_id])
  end
end
