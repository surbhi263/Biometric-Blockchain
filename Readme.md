                 Install pre-requisites for Hyperledger Fabric
					 
1. Login  to ubuntu machine with root access using 
      sudo su
      Run below command to clear all unwanted docker components.
     sudo apt-get remove docker docker-engine docker.io containerd runc -y
    Update and install required tools
      sudo apt-get update
      sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

    
2. Install docker with below commands


curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs)
stable&quot;
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
sudo usermod -a -G docker $USER
reboot
After reboot login as root user and run below commands to install docker compose
sudo curl -L &quot;https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)&quot;
-o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo apt-get update
sudo apt-get -y upgrade

3. Install go package

cd /tmp 
wget https://dl.google.com/go/go1.16.linux-amd64.tar.gz
sudo tar -xvf go1.11.linux-amd64.tar.gz
sudo mv go /usr/local
echo &#39;export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH&#39; &gt;&gt; ~/.profile
source ~/.profile
Install nodejs in /home directory
cd /home
sudo apt update
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs
apt install node-gyp -y
Install python
sudo apt-get install python


4. Installation of Hyperledger Fabric Samples, Binaries and Docker Images
curl -sSL https://bit.ly/2ysbOFE | bash -s


5. For deleting the existing HLF network

      sh stop-hlf-network.sh


6. For starting the network HLF netwokr


      sh start-hlf-network.sh


7. For Deploying HLF Caliper 


      sh deploy-hlf-caliper.sh
