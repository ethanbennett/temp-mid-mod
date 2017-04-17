class Link < ActiveRecord::Base
  belongs_to :user
  validates :url, :title, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))
  validates_uniqueness_of :title, scope: :user_id
  validates_uniqueness_of :url, scope: :user_id
end
