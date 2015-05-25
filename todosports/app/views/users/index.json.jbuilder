json.array!(@users) do |user|
  json.extract! user, :id, :name, :age, :picture
  json.url user_url(user, format: :json)
end
