# <div align = "center"><img src="https://user-images.githubusercontent.com/66263776/109352302-948a4480-7848-11eb-848f-7bc37347f1fd.png" width="40" height= "40">  Price inspector <img src="https://user-images.githubusercontent.com/66263776/109352302-948a4480-7848-11eb-848f-7bc37347f1fd.png" width="40" height= "40"> </div>
## Introduction
Succeeding in the world of the financial market investing in the stock market can be quite difficult, due to the enormous amount of information that exists, and the risks that these investments involve.</br>
However, just in the US there are around 30 million investors, a number that jumps to about 80 million investors ... **Worldwide !!!** **Crazy!!!**</br>

One of the greatest keys to success in this complex world is knowing how to choose the right strategy. The idea of ​​implementing these strategies is that they may allow you to predict the behavior of prices to know if it is a good idea to sell, buy, or just hold your position, however, the journey of finding the right strategy can be quiet, but seriously quite exhausting, not only because of the number of existing strategies ... more than **100!**</br>

But mainly because of the enormous work involved and required to verify that the chosen strategy really works, and the way to test the strategy is to review it using data from the past and check how much it is capable of predicting price behavior, how many times it was correct, how many times it was close and how many missed, well …This kind of test of strategies is called Backtesting and it can become a really complex process because of the number of parameters that you need to know and handle, in many cases you need programming knowledge and in most cases ... math!!! And well, you know how it goes with that!</br>

You must graph, do some maths, verify data, know concepts, spend a lot, actually a lot of time trying only one strategy! Now imagine all this effort, time, and work for each of the existing strategies !!!

>*Don't you think it would be great to be able to do all this hard work ... with just one click?*

<div align="center"><img src="https://user-images.githubusercontent.com/66263776/112241542-7251cf80-8c18-11eb-888e-30cd9cfff0f8.png" width="400" height= "200"> </div>

## :hammer_and_wrench: Installation :hammer_and_wrench:

Clone this repository in terminal
>$ git clone https://github.com/CBarreiro96/PRICE-INSPECTOR

After cloning the repository run the install file
>user@ubuntu:~/PRICE-INSPECTOR$ ./install.sh

During the installation it will ask you for permissions for installation, write **y** to continue it. At the end of the installation it will ask you for a password, This password is for the mysl database - by default this password is ***root***

Then you have to configure the information of the companies and the strategies for their operation.</br>

In the 1  terminal.
```shell
user@ubuntu:~/PRICE-INSPECTOR$ ./run_api.sh 
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```
In the 2 terminal
```shell
user@ubuntu:~/PRICE-INSPECTOR$ ./config_api.sh
...

* Could not resolve host: POST
* Closing connection 0
curl: (6) Could not resolve host: POST
*   Trying 0.0.0.0:5000...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 5000 (#1)
> POST /api/v1/strategies/ HTTP/1.1
> Host: 0.0.0.0:5000
> User-Agent: curl/7.68.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 410
> 
* upload completely sent off: 410 out of 410 bytes
* Mark bundle as not supporting multiuse
* HTTP 1.0, assume close after body
< HTTP/1.0 201 CREATED
< Content-Type: application/json
< Content-Length: 622
< Access-Control-Allow-Origin: *
< Server: Werkzeug/1.0.1 Python/3.8.5
< Date: Wed, 24 Mar 2021 02:17:12 GMT
< 
{
  "__class__": "Strategy", 
  "created_at": "2021-03-24T02:17:12.212883", 
  "id": "a0efce1a-6e7e-4b56-9bce-28fd2ccb857c", 
  "name": "Ichimoku Kinko Hyo", 
  "param_0_name": "tenkan_lookback", 
  "param_0_value": "9", 
  "param_1_name": "kijun_sen_lookback", 
  "param_1_value": "26", 
  "param_2_name": "chikou_span_lookback", 
  "param_2_value": "26", 
  "param_3_name": "senkou_span_A_projection", 
  "param_3_value": "26", 
  "param_4_name": "senkou_span_B_lookback", 
  "param_4_value": "52", 
  "param_5_name": "senkou_span_B_projection", 
  "param_5_value": "26", 
  "updated_at": "2021-03-24T02:17:12.212932"
}
* Closing connection 1
"updated"
```

In this moment you can have all tools in your terminal

## Usage
If you want to run the website you must do the following
```shell
user@ubuntu:~/PRICE-INSPECTOR$ cd web_dynamic
user@ubuntu:~/PRICE-INSPECTOR/web_dynamic$ npm start

> price_inspector@0.1.0 start
> craco start


Compiled with warnings.

src/components/ChoicesBoard.js
  Line 38:7:   Do not mutate state directly. Use setState()     react/no-direct-mutation-state
  Line 46:27:  'myResponse' is assigned a value but never used  no-unused-vars
  Line 52:2:   Do not mutate state directly. Use setState()     react/no-direct-mutation-state
  Line 55:1:   Do not mutate state directly. Use setState()     react/no-direct-mutation-state
  Line 58:5:   Do not mutate state directly. Use setState()     react/no-direct-mutation-state
  Line 61:3:   Do not mutate state directly. Use setState()     react/no-direct-mutation-state
  Line 77:19:  'key' is assigned a value but never used         no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

```

You will see a page similar to images the introduccion, you need to select the bottom try it now to use this aplication. and you see in this part the follow
<div align="center"><img src="https://user-images.githubusercontent.com/66263776/112246840-4be46200-8c21-11eb-9a77-459ffc3e0856.png" width="400" height= "200"> </div>

You can explore different thing that this have, simulate the different backtestnig and analyze them

## Page
However you can use the original page , and it is a service in the follow link.</br>
http://www.priceinspector.studio/

## Authors
:woman_technologist: Angie Perez / [xioperez01](https://github.com/xioperez01 "Github User")</br>
:man_technologist: Daniel Lorenzo / [dlscoccia](https://github.com/dlscoccia "Github User")</br>
:man_technologist: Gabriel Cifuentes / [gcifuentess](https://github.com/gcifuentess "Github User")</br>
:man_technologist: Camilo Barreiro / [CBarreiro96](https://github.com/CBarreiro96 "Github User")

