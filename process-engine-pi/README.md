# ProcessEngineJS Skeleton PI

This is a Server that provides a process-engine-instance for a raspberry pi

## What are the goals of this project?

The goal is to provide a minimal starting point for creating a ProcessEngine-Instance, that works on the Raspberry PI and interacts with some GPIO-Devices

### Requirements

- Node >= `6.2.1`
- Raspberry PI 3
- 

### Setup/Installation

Install [raspbian lite](https://www.raspberrypi.org/downloads/raspbian/) as it is described on the website.

#### Update the OS
```
apt-get update
apt-get upgrade
apt-get dist-upgrade
```

install make, g++, screen, nano raspi-config:
```
apt-get install make g++ screen nano raspi-config smbus python-smbus
```

activate ssh, expand file-system, set language and rename the pi through raspi-config
```
raspi-config
```
- select `Interfacing Options` -> `SSH` -> `Yes` -> `Ok`
- select `Localisation Options` -> `Change Locale` -> Select your Locale (e.g. `de_DE.UTF-8 UTF-8`) -> `Ok` -> Select system-locale (e.g. `de_DE.UTF-8`)
- select `Hostname` -> `Ok` -> enter a new name -> `Ok`

#### setup WIfi

create `/etc/network/interfaces.d/wifi` with the following content:
```
allow-hotplug wlan0
iface wlan0 inet manual
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp
```

create the file `/etc/wpa_supplicant/wpa_supplicant.conf` with the following content:
```
network={
  ssid="yourssid"
  psk="yourpassword"
}
```
reboot

get the PIs IP-Address:
```
ifconfig wlan0
```
remeber that IP address. From now on, use ssh to access the pi as this is easier

#### Install node
*see [installing nvm](https://github.com/creationix/nvm)*

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
exit
```

reconnect
```
nvm install 7
```

#### Setup the Process-Engine
- copy this folder (process-engine-pi) to your pi
- ssh into your pi, move into the folder you just copied and install the necessary dependencies with
```bash
npm install
```

#### Make the process-engine autostart on boot
see *[this tutorial](https://linuxconfig.org/how-to-automatically-execute-shell-script-at-startup-boot-on-systemd-linux)*

create the file `/etc/systemd/system/process-engine.service` with the following content:
```
[Unit]
After=network-online.target

[Service]
Type=forking
ExecStart=/usr/bin/screen -dmLS process-engine npm start --prefix /PATH-TO-YOUR-PROJECT

[Install]
WantedBy=multi-user.target
```

install the systemd-service:
```
chmod 664 /etc/systemd/system/process-engine.service
systemctl daemon-reload
systemctl enable process-engine.service
```

## How do I use this project?

### Usage

Start the process-engine-instance with
```bash
npm start
```

## What else is there to know?

### Authors/Contact information

- Simon Reymann <simon.reymann@quantusflow.com>
- Patrick Pötschke <patrick.poetschke@quantusflow.com>
- Heiko Mathes <heiko.mathes@5minds.de>
