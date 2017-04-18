require 'rails_helper'

RSpec.describe "When a user tries to submit a new link" do
  before do
    visit new_user_path

    fill_in "user[email]", :with => "b@a.com"
    fill_in "user[password]", :with => "a"
    fill_in "user[password_confirmation]", :with => "a"

    click_on "Submit"
  end

  it "they can add properly formatted data" do
    fill_in "url" , :with => "https://google.com"
    fill_in "title", :with => "Google"

    click_on "Submit"

    expect(page).to have_content "You added a link!!!!!!!!!!!!!!!!!!!!!!!!!!"
  end

  it "they cannot add a link if the 'title' field is blank" do
    fill_in "url", :with => "https://google.com"
    click_on "Submit"

    expect(page).to have_content "Please include a URL and a title"
  end

  it "they cannot add a link if the 'url' field is blank" do
    fill_in "title", :with => "a"
    click_on "Submit"

    expect(page).to have_content "Please include a URL and a title"
  end

  it "they cannot add a link with an improper URL" do
    fill_in "url", :with => "ethan.b"
    fill_in "title", :with => "a"
    click_on "Submit"

    expect(page).to have_content "Please enter a valid URL (it should begin with HTTP or HTTPS)"
  end
end