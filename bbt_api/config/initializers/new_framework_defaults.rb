Rails.application.config.action_controller.raise_on_unfiltered_parameters = true
Rails.application.config.ssl_options = { hsts: { subdomains: true } }
Rails.application.config.active_record.belongs_to_required_by_default = true
ActiveSupport.to_time_preserves_timezone = true
ActiveSupport.halt_callback_chains_on_return_false = false
