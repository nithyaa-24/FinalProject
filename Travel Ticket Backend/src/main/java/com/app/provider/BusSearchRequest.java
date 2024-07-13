package com.app.provider;

//TrainSearchRequest.java
import java.time.LocalDate;

public class BusSearchRequest {
 private String source;
 private String destination;
 private LocalDate arrivalDate;
 private LocalDate departureDate;
 

 // Getters and Setters

 public LocalDate getArrivalDate() {
	return arrivalDate;
}

public void setArrivalDate(LocalDate arrivalDate) {
	this.arrivalDate = arrivalDate;
}

public LocalDate getDepartureDate() {
	return departureDate;
}

public void setDepartureDate(LocalDate departureDate) {
	this.departureDate = departureDate;
}

public String getSource() {
     return source;
 }

 public void setSource(String source) {
     this.source = source;
 }

 public String getDestination() {
     return destination;
 }

 public void setDestination(String destination) {
     this.destination = destination;
 }
}

 
