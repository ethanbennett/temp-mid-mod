require 'rails_helper'

RSpec.describe "When a visitor wants to create an account" do
  it "they can create an account" do
    visit new_user_path

    fill_in "user[email]", :with => "a@a.com"
    fill_in "user[password]", :with => "a"
    fill_in "user[password_confirmation]", :with => "a"

    click_on "Submit"

    expect(page).to have_content "Welcome to the best app you'll ever belong to"
  end

  it "they cannot create an account with an invalid email" do
    visit new_user_path

    fill_in "user[email]", :with => "a"
    fill_in "user[password]", :with => "a"
    fill_in "user[password_confirmation]", :with => "a"
    
    click_on "Submit"
    
    expect(page).to have_content "Please enter a valid email address"
  end

  it "they cannot create an account with a password mismatch" do
    visit new_user_path

    fill_in "user[email]", :with => "a@a.com"
    fill_in "user[password]", :with => "a"
    fill_in "user[password_confirmation]", :with => "b"
    
    click_on "Submit"
    
    expect(page).to have_content "Please make sure your password confirmation matches your password"
  end

  it "they cannot create an account with an invalid password" do
    visit new_user_path

    fill_in "user[email]", :with => "a@a.com"
    click_on "Submit"
    
    expect(page).to have_content "Please enter a valid password"
  end
end