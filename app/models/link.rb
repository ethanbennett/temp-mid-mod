class Link < ActiveRecord::Base
  belongs_to :user
  validates :url, :title, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))

  def self.top_ten
    Link.all.sort_by(&:count).reverse[0...10]
  end

  def in_top_ten?
    Link.top_ten.include? self
  end

  def number_one?
    Link.top_ten[0] == self
  end
end
