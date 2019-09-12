# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ApplicationRecord
    validates :product_id, :quantity, presence: true 
    validates :product_id, :quantity, numericality: true
    validates :quantity, numericality: {greater_than_or_equal_to: 0}

    belongs_to :product
    belongs_to :user
end
