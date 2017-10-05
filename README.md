# ProcessEngineJS Skeleton

This is is a Database, process-engine-instance and web-ui to edit process-models

## What are the goals of this project?

This Project has two goals:
1. provide a minimal starting point for creating a ProcessEngine ([database](database), [process-engine-server](process-engine-server))
2. provide the minimal implementation necessary to run the reservation-demo ([database](database), [process-engine-server-demo](process-engine-server-demo), [process-engine-pi](process-engine-pi))

### Requirements

For the minimal setup, see
- [database-requirements](database/README.md#requirements)
- [process-engine-server-requirements](process-engine-server/README.md#requirements)
- [frontend-requirements](https://github.com/5minds/charon#voraussetzungen)
  
For the reservation-demo, see
- [database-requirements](database/README.md#requirements)
- [process-engine-server-demo-requirements](process-engine-server-demo/README.md#requirements)
- [process-engine-pi-requirements](process-engine-pi/README.md#requirements)
- [frontend-requirements](https://github.com/5minds/charon#voraussetzungen)

### Setup/Installation

For the minimal setup:
- start a database as described in the [database-setup](database/README.md#setup)
- setup the process-engine-server-instance as described in the [server-setup](process-engine-server/README.md#setupinstallation)
- clone the [charon-frontend](https://github.com/5minds/charon) and follow its [setup-guide](https://github.com/5minds/charon#setupinstallation)

For the reservation-demo setup:
- start a database as described in the [database-setup](database/README.md#setup)
- setup the process-engine-server-demo-instance as described in the [server-demo-setup](process-engine-server-demo/README.md#setupinstallation)
- setup the process-engine-pi-instance as described in the [pi-setup](process-engine-pi/README.md#setupinstallation)
- clone the [charon-frontend](https://github.com/5minds/charon) and follow its [setup-guide](https://github.com/5minds/charon#setupinstallation)


## How do I use this project?

### Usage

For the minimal setup:
- you don't really need to do anything with the DB. if you want to anyway, see the [database-usage](database/README.md#usage)
- start the process-engine-server-instance as described in the [server-usage](process-engine-server/README.md#usage)
- start the charon-frontend as desribed in its [usage-guide](https://github.com/5minds/charon#wie-kann-ich-das-projekt-benutzen)

For the reservation-demo setup:
- you don't really need to do anything with the DB. if you want to anyway, see the [database-usage](database/README.md#usage)
- start the process-engine-server-demo-instance as described in the [server-demo-setup](process-engine-server-demo/README.md#setupinstallation)
- start the process-engine-pi-instance as described in the [pi-usage](process-engine-pi/README.md#usage)
- start the charon-frontend as desribed in its [usage-guide](https://github.com/5minds/charon#wie-kann-ich-das-projekt-benutzen)

## What else is there to know?

### Workarounds

There are still some bugs in the process engine. Because of this, There are a few workarounds applied to the process-engine-server-demo. See [server-workarounds](process-engine-server/README.md#workarounds) and [server-demo-workarounds](process-engine-server-demo/README.md#workarounds) for detailed info.


### Authors/Contact information

- Simon Reymann <simon.reymann@quantusflow.com>
- Patrick Pötschke <patrick.poetschke@quantusflow.com>
- Heiko Mathes <heiko.mathes@5minds.de>
