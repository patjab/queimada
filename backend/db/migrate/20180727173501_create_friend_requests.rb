class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.references :requested_user
      t.references :requester_user

      t.timestamps
    end
  end
end
