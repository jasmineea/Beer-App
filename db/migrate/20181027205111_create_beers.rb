class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.text :style
      t.string :hop
      t.string :alcohol

      t.timestamps
    end
  end
end
