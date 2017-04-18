require 'rails_helper'

RSpec.describe "Read/Unread button functionality", :js => true do
  before do
    visit new_user_path
    fill_in "user[email]", :with => "c@a.com"
    fill_in "user[password]", :with => "a"
    fill_in "user[password_confirmation]", :with => "a"
    click_on "Submit"
    fill_in "url" , :with => "https://google.com"
    fill_in "title", :with => "Google"
    click_on "Submit"
  end

  it "can do that thing" do
    click_on "Mark Read"
    expect(page).to have_content "Mark Unread"
    click_on "Mark Unread"
    expect(page).to have_content "Mark Read"
  end
end