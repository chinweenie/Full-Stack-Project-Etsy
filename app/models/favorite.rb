# == Schema Information
#
# Table name: favorites
#
#  id               :bigint           not null, primary key
#  favoritable_type :string           not null
#  favoritable_id   :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :integer          not null
#

class Favorite < ApplicationRecord
    validates :favoritable_type, :favoritable_id, :user_id, presence: true
    belongs_to :user 
    belongs_to :favoritable, polymorphic: true
    default_scope { includes(:favoritable) }
end
