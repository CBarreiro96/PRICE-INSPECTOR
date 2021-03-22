#!/bin/bash
sudo apt update
sudo apt install build-essential checkinstall libssl-dev
sudo apt-get install python3-pip mysql-server python3-dev libmysqlclient-dev zlib1g-dev python3-venv
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install v15.12.0
python3 -m venv env
source env/bin/activate
pip3 install -r ./config/requirement.txt
cd web_dynamic/
npm install
cat ./database/setup_mysql.sql | sudo mysql -u root -p
