# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  shop_id     :integer          not null
#  category_id :integer          not null
#

class Product < ApplicationRecord
    validates :title, :description, :price, :shop_id, :category_id, presence: true
    validates :price, numericality: { greater_than: 0 }
    validates :quantity, numericality: { greater_than_or_equal_to: 0}

    belongs_to :shop 
    belongs_to :category

    has_many_attached :images

    has_many :favorites, as: :favoritable, dependent: :destroy
    has_many :users_who_favorited_me, through: :favorites

    has_many :reviews
   
end
