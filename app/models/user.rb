class User < ApplicationRecord
  has_secure_password
  validates :email, :password, :password_confirmation, presence: true
  validates_uniqueness_of :email
  has_many :links
end
