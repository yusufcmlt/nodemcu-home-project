#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
// Set these to run example.
#define FIREBASE_HOST "ev-otomasyon-f0c18.firebaseio.com"
#define FIREBASE_AUTH "uK0BHzQJMsZSLXSKipLVM989vQbP9jxGlFJWdtnc"
#define WIFI_SSID "huawei"
#define WIFI_PASSWORD "osman123"
void setup() {
Serial.begin(9600);
pinMode(D1, OUTPUT);
// connect to wifi.
WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
Serial.print("connecting");
while (WiFi.status() != WL_CONNECTED) {
Serial.print(".");
delay(500);
}
Serial.println();
Serial.print("connected: ");
Serial.println(WiFi.localIP());
Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
//Firebase.set("lamba", 0);
}
int n = 0;
void loop() {
// get value
n = Firebase.getInt("lamba");
// handle error
if (n==1) {
Serial.println("LED ON");
digitalWrite(D1,HIGH);  
}
else {
Serial.println("LED OFF");
digitalWrite(D1,LOW);  
}
}
