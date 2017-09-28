#!/usr/bin/env python
import LCD1602
import time
import sys

def setup():
  LCD1602.init(0x27, 1)  # init(slave address, background light)
  LCD1602.write(0, 0, sys.argv[1])

def destroy():
  pass

if __name__ == "__main__":
  setup()
