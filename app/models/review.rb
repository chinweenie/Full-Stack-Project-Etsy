# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  body       :text             not null
#  product_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :rating, :body, :product_id, :user_id, presence: true
    validates :rating, numericality: { greater_than_or_equal_to: 0, less_than: 6 }

    belongs_to :product
    belongs_to :user
    
end
