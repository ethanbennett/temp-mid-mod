require 'rails_helper'

RSpec.describe "When a visitor tries to log in" do
  before do
    @user = User.create(email: "a@a.com", password: "a", password_confirmation: "a")
  end

  it "they can log in with proper credentials" do
    visit login_path

    fill_in :email, :with => @user.email
    fill_in :password, :with => @user.password
    click_on "Submit"
    
    expect(page).to have_content "a@a.com"
  end

  it "they cannot log in with a blank field" do
    visit login_path

    fill_in :email, :with => @user.email
    click_on "Submit"
    
    expect(page).to have_content "ol' DB"
  end

  it "they cannot log in with improper credentials" do
    visit login_path

    fill_in :email, :with => "@user.email"
    fill_in :password, :with => @user.password
    click_on "Submit"
    
    expect(page).to have_content "Create Account"
  end

end