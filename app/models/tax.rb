class Tax < ApplicationRecord

    belongs_to :user_address
    belongs_to :order


end
