class StaticPagesController < ApplicationController
  # before_filter :require_current_user!
  def home
    render :home
  end
end
