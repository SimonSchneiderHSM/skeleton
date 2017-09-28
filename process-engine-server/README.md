# ProcessEngineJS Skeleton Server

This is a Server that provides a process-engine-instance

## What are the goals of this project?

The goal is to provide a minimal starting point for creating a ProcessEngine

### Requirements

- Node >= `6.2.1`

### Setup/Installation

Install all Dependencies with
```bash
npm install
```

## How do I use this project?

### Usage

Start the server on your main machine with
```bash
npm run start
```

if you want to interact with the raspberry-pi

When started, the process-engine-instance is avaliable at `http://localhost:8000`

## What else is there to know?

### Stuff in here, that's not *really* necessary for a skeleton

TL;DR: the following files/folders are only necessary for the reservation-process:
- src
- dist
- gulpfile.js
- tsconfig.json

This skeleton registeres a `ReservationEntity` and a reservation-process to the ioc-container, because it's needed by the reservation-process. If you don't need the revervation-process, you don't need to care about certain files/folders.

### Workarounds

There are still some bugs in the process engine. Because of this, the following workarounds are applied to this application:

- the feature-config that tells the server what the pi can do (in `config/development/feature/feature_service.json`) says, that the pi can render UI (`UI: true`), even though it can't. This makes the server send the necessary UI-messages, that then get caught by the frontend, wich in turn CAN render UI. Without this workaround, the server wouldn't even try to send the necessary UI-messages

### Authors/Contact information

- Simon Reymann <simon.reymann@quantusflow.com>
- Patrick Pötschke <patrick.poetschke@quantusflow.com>
- Heiko Mathes <heiko.mathes@5minds.de>
