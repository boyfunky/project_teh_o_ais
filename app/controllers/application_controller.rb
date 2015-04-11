# app/controllers/api_controller.rb
# API routes extend from this controller
class ApiController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
end

# app/controllers/application_controller.rb
# leave this for ActiveAdmin, and any other non-api routes

class ApplicationController < ActionController::Base
	include ActionController::MimeResponds
  #include DeviseTokenAuth::Concerns::SetUserByToken

  #respond_to :html, :json
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery
  skip_before_action :verify_authenticity_token, if: :json_request?

   protected

  def json_request?
    request.format.json?
  end
end
