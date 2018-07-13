# json.partial! 'api/users/user.json.jbuilder', user: @user

json.extract! @user, :id, :username, :email, :full_name
