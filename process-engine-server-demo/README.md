# ProcessEngineJS Skeleton Server Demo

This is a copy of the [../process-engine-server](skeleton) that includes implementation and workarounds for the reservation-demo

## What are the goals of this project?

The goal is to provide a process-engine-instance that can execute the reservation-demo

### Requirements

- Node >= `6.2.1`

### Setup/Installation

Install all Dependencies and build the reservation-entity
```bash
npm install
npm run build
```

## How do I use this project?

### Usage

Start the server on your main machine with
```bash
npm run start
```

When started, the process-engine-instance is avaliable at `http://localhost:8000`

## What else is there to know?

### Workarounds

There are still some bugs in the process engine. Because of this, the following workarounds are applied to this application:

- the feature-config that tells the server what the pi can do (in `config/development/feature/feature_service.json`) says, that the pi can render UI (`UI: true`), even though it can't. This makes the server send the necessary UI-messages, that then get caught by the frontend, wich in turn CAN render UI. Without this workaround, the server wouldn't even try to send the necessary UI-messages

### Authors/Contact information

- Simon Reymann <simon.reymann@quantusflow.com>
- Patrick Pötschke <patrick.poetschke@quantusflow.com>
- Heiko Mathes <heiko.mathes@5minds.de>
