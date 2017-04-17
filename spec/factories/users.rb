FactoryGirl.define do
  factory :user do
    email "MyString"
    password_digest "MyString"

    factory :user_with_links do
      after(:create) do |user|
        create_list(:link, 4, user: user)
      end
    end
  end
end
