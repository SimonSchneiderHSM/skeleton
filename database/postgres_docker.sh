COMMAND=$1
DB_SCENARIO=$2

DB_USER_NAME=admin
DB_USER_PASSWORD=admin
DB_NAME=processengine
DB_PORT=5432

DB_DOCKER_IMAGE_NAME=process_engine_postrgres
DB_CONTAINER_NAME=process_engine_postrgres_container
DB_VOLUME_NAME=process_engine_postgres_volume

LOG_PATH=/dev/null
ABSOLUTE_SCRIPT_FOLDER="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

create_db_container() {
  DOCKERFILE="Dockerfile.skeleton"
  if [[ $DB_SCENARIO == "demo" ]]
  then
    DOCKERFILE="Dockerfile.skeleton.demo"
  fi

  docker build \
    --file $ABSOLUTE_SCRIPT_FOLDER/$DOCKERFILE \
    --tag $DB_DOCKER_IMAGE_NAME \
    $ABSOLUTE_SCRIPT_FOLDER

  docker run \
    --detach \
    --env POSTGRES_USER=$DB_USER_NAME \
    --env POSTGRES_PASSWORD=$DB_USER_PASSWORD \
    --env POSTGRES_DB=$DB_NAME \
    --publish $DB_PORT:5432 \
    --name $DB_CONTAINER_NAME \
    --mount source=$DB_VOLUME_NAME,target=/dbdata \
    $DB_DOCKER_IMAGE_NAME > $LOG_PATH
}

existing_volume_id() {
  echo $(docker volume ls --quiet --filter name=$DB_VOLUME_NAME)
}

existing_db_container_id() {
  echo $(docker ps --all --quiet --filter name=$DB_CONTAINER_NAME)
}

running_db_container_id() {
  echo $(docker ps --quiet --filter name=$DB_CONTAINER_NAME)
}

start() {
  # If the container is already running, abort
  if [[ $(running_db_container_id) != "" ]]
  then
    echo "Container is already running"
  else
    if [[ $(existing_db_container_id) != "" ]]
    then
      echo "starting DB-Container"
      docker start $DB_CONTAINER_NAME > $LOG_PATH
    else
      echo "creating DB-Container"
      create_db_container
    fi
  fi
}

stop() {
  if [[ $(running_db_container_id) == "" ]]
  then
    echo "DB-Container is already stopped"
  else
    echo "stopping DB-Container"
    docker stop $DB_CONTAINER_NAME > $LOG_PATH
  fi
}

clear() {
  stop

  # Remove the DB-Container
  if [[ $(existing_db_container_id) != "" ]]
  then
    echo "removing DB-Container"
    docker rm $DB_CONTAINER_NAME > $LOG_PATH
  else
    echo "DB-Container already removed"
  fi

  # Remove the Volume-Container with the corresponding volume
  if [[ $(existing_volume_id) != "" ]]
  then
    echo "removing Volume"
    docker volume rm $DB_VOLUME_NAME > $LOG_PATH
  else
    echo "Volume already removed"
  fi
}

reset() {
  clear
  start
}

if [[ $1 == "start" ]]
then
  start
elif [[ $1 == "stop" ]]
then
  stop
elif [[ $1 == "restart" ]]
then
  stop
  start
elif [[ $1 == "reset" ]]
then
  reset
else
  echo "Unknown command '$1'"
fi
