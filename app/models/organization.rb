class Organization < ApplicationRecord
  self.primary_key = :id

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: true
end
