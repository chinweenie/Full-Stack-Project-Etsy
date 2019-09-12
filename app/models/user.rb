# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  usename         :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :fname, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    has_many :favorites
    has_many :cart_items
    has_one :shop,
    class_name: :Shop,
    primary_key: :id,
    foreign_key: :owner_id

    has_one_attached :profile_pic

    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypted_password = BCrypt::Password.new(self.password_digest)
        bcrypted_password.is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if !user 
        user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64 
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64 
        self.save! 
        self.session_token 
    end
end
