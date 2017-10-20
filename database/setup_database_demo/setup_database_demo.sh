#!/bin/bash

########################################
# execute this script as user "postgres"
########################################

psql -f create_role_and_db.sql
psql -d processengine -f create_table_and_users.sql
exit
