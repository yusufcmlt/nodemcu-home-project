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

void setup() 
{
  Serial.begin(9600);
  pinMode(D1, OUTPUT); //lamba
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
  Serial.println(WiFi.localIP());                                            
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);                            
  dht.begin();                                                              
}

void sicakliknem(float t,float h)
{
  if (isnan(h) || isnan(t)) {                                                
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h) + String("%");                                         
  Serial.print("%  Temperature: ");  Serial.print(t);  Serial.println("Â°C ");
  String fireTemp = String(t) + String("Â°C");                                                     
  
  Firebase.pushInt("/nem/deger",h);                               
//  if(h<60){
//    Firebase.setString("/nem/durum","Dusuk");
//    }
//   else{
//    Firebase.setString("/nem/durum","Yuksek");
//    }
//  
  Firebase.pushInt("/sicaklik/deger",t);                                   
//  if(t<25){
//    Firebase.setString("/sicaklik/durum","Dusuk");
//    }
//  else{
//    Firebase.setString("/sicaklik/durum","Yuksek");
//    }
}

void lamba(int n)
{
  if (n==1) {
  Serial.println("LED ON");
  digitalWrite(D1,HIGH);  
  }
  else {
  Serial.println("LED OFF");
  digitalWrite(D1,LOW);  
  }
}

void gaz(int deger)
{ 
  Firebase.pushInt("/gaz/deger", deger);
  Serial.println (deger);
//  if (deger>=280){
//      Firebase.setString("/gaz/durum", "yuksek");
//  }
//  else
//  {
//      Firebase.setString("/gaz/durum", "dusuk");
//  }
}

void loop() 
{ 
  lamba(Firebase.getInt("lamba"));
  sicakliknem(dht.readTemperature(),dht.readHumidity());
  gaz(analogRead(A0));
  delay(5000);                                     
}
