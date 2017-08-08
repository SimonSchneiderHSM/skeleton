COMMAND=$1

DB_USER_NAME=admin
DB_USER_PASSWORD=admin
DB_NAME=isolutions_demo

DB_CONTAINER_NAME=process_engine_postrgres_container
VOLUME_CONTAINER_NAME=process_engine_postrgres_volume_container

LOG_PATH=/dev/null

create_volume_container() {
  if [[ $(existing_volume_container_id) == "" ]]
  then
    echo "creating volume container"
    docker create \
      --name ${VOLUME_CONTAINER_NAME} \
      --volume /dbdata \
      postgres /bin/true > $LOG_PATH
  fi
}

create_db_container() {
  docker run \
    --detach \
    --env POSTGRES_USER=$DB_USER_NAME \
    --env POSTGRES_PASSWORD=$DB_USER_PASSWORD \
    --env POSTGRES_DB=$DB_NAME \
    --name $DB_CONTAINER_NAME \
    --volumes-from=${VOLUME_CONTAINER_NAME} \
    postgres > $LOG_PATH
}

existing_volume_container_id() {
  echo $(docker ps --all --quiet --filter name=${VOLUME_CONTAINER_NAME})
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
    create_volume_container
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
  if [[ $(existing_volume_container_id) != "" ]]
  then
    echo "removing Volume-Container"
    docker rm --volumes $VOLUME_CONTAINER_NAME > $LOG_PATH
  else
    echo "Volume-Container already removed"
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