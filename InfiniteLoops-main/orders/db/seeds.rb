# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

customers = Customer.create([
                              {
                                first_name: 'Ace',
                                last_name: 'Goodman',
                                email: 'ag@mail.com'
                              },
                              {
                                first_name: 'Scarlet',
                                last_name: 'Handkerchief',
                                email: 'lostmarbles@yahoo.com'
                              }
                            ])

Order.create([
               {
                 total: 100,
                 customer: customers.first,
                 status: Order::PROCESSING
               },
               {
                 total: 15.99,
                 customer: customers.last,
                 status: Order::CANCELLED
               },
               {
                 total: 13.99,
                 customer: customers.last,
                 status: Order::COMPLETE
               }
             ])
