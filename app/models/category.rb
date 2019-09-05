# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
    validates :name, presence: true
    has_many :products
    
    has_many :favorites, as: :favoritable, dependent: :destroy
    has_many :users_who_favorited_me, through: :favorites
end
