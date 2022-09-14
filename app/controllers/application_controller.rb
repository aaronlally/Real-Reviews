class ApplicationController < ActionController::API
    include ActionController::Cookies

    # catchs exceptions thrown from any controller
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    # before any action not listed as skip_before_action run the private method authorize
    before_action :authorize

    private

    # if the user does not have an active session render error status not authorized
    def authorize
      @current_user = User.find_by(id: session[:user_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    # handle exception thrown for invalid record
    def render_record_invalid(exeption)
      render json: {errors: exeption.record.errors.full_messages}, status: :unprocessable_entity
    end

    # handle exception thrown for record not found
    def render_record_not_found(error)
      render json: {error: "#{error.model} not found"}, status: :not_found
    end
end
