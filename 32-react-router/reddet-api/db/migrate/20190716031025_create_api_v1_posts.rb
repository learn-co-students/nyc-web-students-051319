class CreateApiV1Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :author, foreign_key: true
      t.string :community
      t.text :content
      t.bigint :upvotes
      
      t.timestamps
    end
  end
end
