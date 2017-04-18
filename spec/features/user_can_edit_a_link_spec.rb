require 'rails_helper'

RSpec.describe "When a user tries to edit a link" do
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

  it "they can edit with properly formatted data" do
    click_on "Edit"

    fill_in "url" , :with => "https://g.com"
    fill_in "title", :with => "Google"

    click_on "Submit"

    expect(page).to have_content "You updated a link!!!!!!!!!!!!!!!!!!!!!!!!!!"
  end

  it "they cannot update a link if the 'title' field is blank" do
    click_on "Edit"

    fill_in "url", :with => "https://google.com"
    fill_in "title", :with => ""

    click_on "Submit"

    expect(page).to have_content "Please include a URL and a title"
  end

  it "they cannot update a link if the 'url' field is blank" do
    click_on "Edit"
    
    fill_in "url", :with => ""
    fill_in "title", :with => "a"

    click_on "Submit"

    expect(page).to have_content "Please include a URL and a title"
  end

  it "they cannot update a link with an improper URL" do
    click_on "Edit"

    fill_in "url", :with => "ethan.b"
    fill_in "title", :with => "a"

    click_on "Submit"

    expect(page).to have_content "Please enter a valid URL (it should begin with HTTP or HTTPS)"
  end
end