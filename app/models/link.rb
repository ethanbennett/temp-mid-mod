class Link < ActiveRecord::Base
  belongs_to :user
  validates :url, :title, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))

  def self.top_ten
    Link.all.sort_by(&:count).reverse[0...10]
  end
end
