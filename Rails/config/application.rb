require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

class Application < Rails::Application
  config.load_defaults 5.1

  config.api_only = true
  config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3000'
      resource '*',
      :headers => :any,
      :methods => [:get, :post, :patch, :delete, :options]
    end
  end
end