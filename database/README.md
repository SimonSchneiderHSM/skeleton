# ProcessEngineJS Skeleton PostgreSQL-DB

## Requirements

- an x86 computer
- bash
- docker >= `1.9`

## Setup

### Build and start the volume- and database-containers

```bash
./postgres_docker.sh start
```

## Configuration

The docker containers can be configured in the `postgres_docker.sh`:

- `DB_USER_NAME` is the username of the db-admin-account
- `DB_USER_PASSWORD` is the password of the db-admin-account
- `DB_NAME` is the name the processengine-database will have

## Usage
The Database is avaliable on it's default port `5432`

It will automatically add the following two users, if it recreated the DB:
```
username: admin
password: admin
roles: ['administrator']

username: exampleuser
password: password
roles: ['user']
```

the convinience-script `postgres_docker.sh` lets you:
```bash
./postgres_docker.sh start   # create and start the volume and db container
./postgres_docker.sh stop    # stop the db container
./postgres_docker.sh restart # run stop and then start
./postgres_docker.sh reset   # run stop, then delete volume and db-container and then run start
```

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

