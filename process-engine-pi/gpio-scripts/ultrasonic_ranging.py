#!/usr/bin/env python

import RPi.GPIO as GPIO
import time
import sys

GPIO.setwarnings(False)

TRIG = 11
ECHO = 12

def setup():
  GPIO.setmode(GPIO.BOARD)
  GPIO.setup(TRIG, GPIO.OUT)
  GPIO.setup(ECHO, GPIO.IN)

def distance():
  GPIO.output(TRIG, 0)
  time.sleep(0.000002)

  GPIO.output(TRIG, 1)
  time.sleep(0.00001)
  GPIO.output(TRIG, 0)


  while GPIO.input(ECHO) == 0:
    a = 0
  time1 = time.time()
  while GPIO.input(ECHO) == 1:
    a = 1
  time2 = time.time()

  during = time2 - time1
  return during * 340 / 2 * 100

def loop():
  for x in range(0, int(sys.argv[1])):
    dis = distance()
    print dis, 'cm'
    print ''
    sys.stdout.flush()
    time.sleep(0.1)

def destroy():
  GPIO.cleanup()

if __name__ == "__main__":
  setup()
  try:
    loop()
  except KeyboardInterrupt:
    destroy()
