

class Stores::TransactionsController < ApplicationController
  def index

    binding.pry
    transactions = Transaction.all
    render json: transactions

  end
end
