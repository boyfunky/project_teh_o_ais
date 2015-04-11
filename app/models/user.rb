class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  #devise :database_authenticatable, :registerable,
         #x`:recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

   before_save -> do
    self.uid = SecureRandom.uuid
    skip_confirmation!
  end
  
end
