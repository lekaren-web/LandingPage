FROM ruby:2.5.9

WORKDIR /usr/src/app

RUN apt-get update \
	&& apt-get install -y \
	nodejs \
	yarn \
	postgresql-client

# COPY Gemfile Gemfile.lock ./
COPY Gemfile ./

RUN bundle install

COPY . .

# Execute this script each time the server starts
COPY start.sh /usr/bin

RUN chmod +x /usr/bin/start.sh

ENTRYPOINT ["start.sh"]

EXPOSE 1234

# Boot Rails
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "1234"]
