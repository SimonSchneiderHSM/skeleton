# process-engine Skeleton PostgreSQL-DB

## Requirements

- an x86 computer
- bash

## Setup demo database without docker
If you want to setup the demo database without installing docker, go to the setup_database_demo folder and execute the included script. It will run the necessary SQL commands to create the database "procesengine", the role "admin" and populate the DB with the demo data.

Pre-requisites:
- Installed and running postgres.
- The database "processengine" and the role "admin" must not yet exist.

## What else is there to know?

The command used to create the user-table-backup is:

```
pg_dump \
  --format plain \
  --file "user.sql" \
  --host localhost \
  --no-password \
  --port 5432 \
  --table "public.\"User\"" "processengine"
  --username "admin" \
  --verbose \
```
