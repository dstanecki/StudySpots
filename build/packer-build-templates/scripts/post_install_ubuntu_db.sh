#!/bin/bash 
set -e
set -v

#################################################################################
# Install additional packages and dependencies here
# Make sure to leave the -y flag on the apt-get to auto accept the install
# Firewalld is required
#################################################################################

sudo apt-get install -y mariadb-server firewalld

#################################################################################
# Update /etc/hosts file
#################################################################################

echo "192.168.56.101     lb    lb.class.edu"    | sudo tee -a /etc/hosts
echo "192.168.56.102     ws1   ws1.class.edu"   | sudo tee -a /etc/hosts
echo "192.168.56.103     ws2   ws2.class.edu"   | sudo tee -a /etc/hosts
echo "192.168.56.104     ws3   ws3.class.edu"   | sudo tee -a /etc/hosts
echo "192.168.56.105     db    db.class.edu"    | sudo tee -a /etc/hosts

#################################################################################
# Set hostname
#################################################################################
sudo hostnamectl set-hostname db

#################################################################################
# Change the value of XX to be your team GitHub Repo
# Otherwise your clone operation will fail
# The command: su - vagrant -c switches from root to the user vagrant to execute 
# the git clone command
##################################################################################

su - vagrant -c "git clone git@github.com:illinoistech-itm/2022-team06w.git"
cd /home/vagrant/2022-team06w/code
#################################################################################
# Enable http in the firewall
# We will be using the systemd-firewalld firewall by default
# https://firewalld.org/
# https://firewalld.org/documentation/
#################################################################################

# Open firewall port for port 3306/tcp
sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent 
# Open firewall port to allow only connections from 192.168.56.0/24
sudo firewall-cmd --zone=public --add-source=192.168.56.0/24 --permanent
# Reload changes to firewall
sudo firewall-cmd --reload

#################################################################################
# Changing the mysql bind address with a script to listen for external 
# connections
# This is important because mysql by default only listens on localhost and needs
# to be configured to listen for external connections
# https://serverfault.com/questions/584607/changing-the-mysql-bind-address-within-a-script
# https://en.wikipedia.org/wiki/Sed
#################################################################################

# If using mysql instead of MariaDB the path to the cnf file is /etc/mysql/mysql.conf.d/mysql.cnf
# The command: $(cat /etc/hosts | grep db | awk '{ print $1 }') will retrieve the IP address of the db from the /etc/hosts file, a bit of a hack...
# sudo sed -i "s/.*bind-address.*/#bind-address = $(cat /etc/hosts | grep db | awk '{ print $1 }')/" /etc/mysql/mysql.conf.d/mysql.cnf
sudo sed -i "s/.*bind-address.*/bind-address = $(cat /etc/hosts | grep db | awk '{ print $1 }')/" /etc/mysql/mariadb.conf.d/50-server.cnf

#################################################################################
# Start mariadb
# Create database "main"
# Create tables Users, StudySpots, Reviews, and Reservations
#################################################################################

sudo systemctl start mariadb.service
sudo mariadb -h localhost -e "
  CREATE USER 'Juan'@localhost IDENTIFIED BY 'Hello';
  GRANT ALL PRIVILEGES ON *.* TO 'Juan'@'localhost' WITH GRANT OPTION;
  FLUSH PRIVILEGES;"
sudo mariadb -h localhost -e "create database main;"
sudo mariadb -h localhost -e "use main;"
sudo mariadb -h localhost -D main -e "
  CREATE TABLE Users (
    user_id serial,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(100) NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE (user_id)
  );
  CREATE TABLE StudySpots (
    location_id serial,
    name varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    description varchar(255),
    amenities varchar(255),
    PRIMARY KEY (location_id),
    UNIQUE (location_id)
  );
  CREATE TABLE Reviews (
    review_id serial,
    location_id bigint UNSIGNED NOT NULL,
    user_id bigint UNSIGNED NOT NULL,
    score integer NOT NULL CHECK (score BETWEEN 0 AND 5),
    message varchar(255),
    PRIMARY KEY (review_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (location_id) REFERENCES StudySpots(location_id) ON DELETE CASCADE
  );
  CREATE TABLE Reservations (
    reservation_id serial,
    user_id bigint UNSIGNED NOT NULL,
    location_id bigint UNSIGNED NOT NULL,
    start_date DATE NOT NULL,
    duration integer NOT NULL,
    PRIMARY KEY (reservation_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (location_id) REFERENCES StudySpots(location_id) ON DELETE CASCADE
  );"
