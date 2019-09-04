# == Schema Information
#
# Table name: shops
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shop < ApplicationRecord
    validates :name, :owner_id, presence: true

    has_many :products
    
    has_many :favorites, as: :favoritable, dependent: :destroy
    has_many :users_who_favorited_me, through: :favorites


    belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id
end