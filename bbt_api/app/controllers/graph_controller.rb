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



                  ##Key name             #Value
                }

  end

  def find_store
    @store = Store.find(params[:store_id])

  end

end

## Total BBT sale from all transactions = totalsale
## Total Taro sale from all transactions = totalTarosale
## Total Lyche sale from all transactions = totalLychesale
## Total Number of stores in burnaby = totalStrBurnaby
## Total Number of stores in Richmond = totalStrRichmond


## Number of Transactions done for this store = storeTransaction
## Number of Taro BBT sold done for this store = storeTaroSold
## Number of Lyche BBT sold done for this store = storeLycheSold
##
##
