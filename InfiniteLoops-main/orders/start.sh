#!/bin/bash
set -e

# Clean up PID if it already exists
rm -f /usr/src/app/tmp/pids/server.pid

# Prepare the database
rake db:drop db:create db:migrate db:seed
rails db:environment:set RAILS_ENV=development

# Let the container run its main process
exec "$@"
