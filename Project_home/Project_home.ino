//Kutuphanelerin tanimi
#include <ESP8266WiFi.h>                                                    
#include <FirebaseArduino.h>                                                
#include <DHT.h>                                                            

//Firebase anahtar ve veritabani adi
#define FIREBASE_HOST "*** BURAYA FIREBASE VERITABANI ADI ***"                         
#define FIREBASE_AUTH "*** BURAYA VERI TABANI BAĞLANTI ANAHTARI ***"            

//Wireless ssid ve sifre
#define WIFI_SSID "*** BURAYA WIFI-SSID"                                             
#define WIFI_PASSWORD "*** BURAYA WIFI SIFRE ***"                                    

#define DHTPIN D4        //Sicaklik ve nem sensoru pin belirlenmesi                                                   
#define DHTTYPE DHT22    //Sicaklik sensor tanimi                                               
DHT dht(DHTPIN, DHTTYPE); 

void setup() 
{
  Serial.begin(9600); //Serial haberlesmenin baslatilmasi
  pinMode(D1, OUTPUT); //led pinin tanimi
  pinMode(D2,OUTPUT); //fan ledinin tanimi
  delay(1000);                
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); //Wireless haberlesmenin baslatilmasi    
  //Wireles haberlesmenin serial ekranda yazdirilmasi                            
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);

  //Wireless agina baglanana kadar denenmesi
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  //Wireless aga baglanma durumu
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());
  //Wireless aga baglanma durumunda firebase veritabanina verilen isim ve key ile baglanma                                
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);    
  //Sicaklik sensorun calistirilmasi                        
  dht.begin();                                                              
}

//Sicaklik ve nem degerlerinin veritabanina yazilmasi
void sicakliknem(float t,float h)
{ 

  //Alinan degerlerin kontrolu
  if (isnan(h) || isnan(t)) {                                                
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  //Degerlerin dogrulugu durumunda serial monitor uzerinde degerlerin yazimi
  Serial.print("NEM: ");  Serial.print(h);
  String fireHumid = String(h) + String("%");                                         
  Serial.print("%  Sicaklik: ");  Serial.print(t);  Serial.println("°C ");
  String fireTemp = String(t) + String("°C");                                                     

  //Degerlerin firebase veritabanina eklenmesi
  Firebase.pushInt("/nem/deger",h);                               
  Firebase.pushInt("/sicaklik/deger",t);                                   
}

//Ledin veritabani uzerinden kontrolu
//n degeri veritabanindaki degiskene esdeger
void lamba(int n)
{
  if (n==1) {
  Serial.println("LED ACIK");
  digitalWrite(D1,HIGH);  
  }
  else {
  Serial.println("LED KAPALI");
  digitalWrite(D1,LOW);  
  }
}

//Fanin relay ile veritabani uzerinden kontrolu
//n degeri veritabanindaki relay kontrol degeri
void klima(int n)
{
  if (n==1) {
      Serial.println("Klima ON");
      digitalWrite(D2,HIGH);  
  }
  if(n==0) {
      Serial.println("Klima OFF");
      digitalWrite(D2,LOW);  
  }
}

//Gaz sensorunun analog pin uzerinden kontrolu
//Alinan gaz degerinin serial monitor uzerinde gosterilmesi ve veritabanina eklenmesi.
void gaz(int deger)
{ 
  Firebase.pushInt("/gaz/deger", deger);
  Serial.println (deger);

}


//NodeMcu'nun calismasi durumunda sensor fonksiyonlarinin cagirilmasi ve calistirilmasi
//Cihaz her 2 saniyede bir veri aktarimi saglamaktadir.
void loop() 
{ 
  lamba(Firebase.getInt("lamba"));
  klima(Firebase.getInt("klima"));
  sicakliknem(dht.readTemperature(),dht.readHumidity());
  gaz(analogRead(A0));
  delay(2000);                                     
}
