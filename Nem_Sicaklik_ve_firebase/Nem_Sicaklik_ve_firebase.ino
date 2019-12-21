#include <ESP8266WiFi.h>                                                  
#include <FirebaseArduino.h>                                               
#include <DHT.h>                                                           

#define FIREBASE_HOST "ev-otomasyon-f0c18.firebaseio.com"                   
#define FIREBASE_AUTH "uK0BHzQJMsZSLXSKipLVM989vQbP9jxGlFJWdtnc"           

#define WIFI_SSID "network45"                                            
#define WIFI_PASSWORD "osman45123"                                  
 
#define DHTPIN D4                                                          
#define DHTTYPE DHT22                                                       
DHT dht(DHTPIN, DHTTYPE);                                                     

void setup() {
  Serial.begin(9600);
  delay(1000);                
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                     
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                            //print local IP address
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);                              // connect to firebase
  dht.begin();                                                               //Start reading dht sensor
}

void loop() { 
  float h = dht.readHumidity();                                              // Reading temperature or humidity takes about 250 milliseconds!
  float t = dht.readTemperature();                                           // Read temperature as Celsius (the default)
    
  if (isnan(h) || isnan(t)) {                                                // Check if any reads failed and exit early (to try again).
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  
  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h) + String("%");                                         //convert integer humidity to string humidity 
  Serial.print("%  Temperature: ");  Serial.print(t);  Serial.println("Â°C ");
  String fireTemp = String(t) + String("Â°C");                                                     //convert integer temperature to string temperature
  delay(5000);
  
  Firebase.pushString("/nem/deger", fireHumid);                                 //setup path and send readings
  if(h<60){
    Firebase.setString("/nem/durum","Dusuk");
    }
   else{
    Firebase.setString("/nem/durum","Yuksek");
    }
  
  Firebase.pushString("/sicaklik/deger", fireTemp);                                //setup path and send readings
  if(t<25){
    Firebase.setString("/nem/durum","Dusuk");
    }
  else{
    Firebase.setString("/sicaklik/durum","Yuksek");
    }
   
}
