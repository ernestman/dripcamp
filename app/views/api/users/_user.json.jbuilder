json.extract! user,
    :id, :email, :first_name, :last_name, :zipcode, :created_at
    json.photoUrl url_for(user.avi_photo)
