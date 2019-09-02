class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypted_password = BCrypt::Password.new(self.password_digest)
        bcrypted_password.is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if !user 
        return is_password?(password) : user : nil
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
