# RFID-card-reader
### Destination
The aim of the project was to learn about the esp8266 microcontroller and try to create a useful device.
### Description
The esp8266 microcontroller, using the attached card reader, reads the appropriate tags and accepts those given to it. The WiFi module connects to the network and saves everything in a Google Sheet. A JavaScript script was written that handles queries, parses JSON data and performs appropriate tasks in a Google Sheet. The device has protection against excessive scanning of an unsaved tag. The user has three chances, after which the alarm turn on. The system also has an alarm against unauthorized opening the case, which is provided by a contracton and a magnet. The system also has a battery backup power supply, which is activated in the event of a main power failure. A PCB and case were designed.
### Technologies
- PlatformIO
- Arduino framework
- C++ 
- JavaScript
### Hardware
- esp8266
- RFID RC522 module
- OLED display 128x32
- backup power supply circuit
- buttons, wires, resistors, etc.
