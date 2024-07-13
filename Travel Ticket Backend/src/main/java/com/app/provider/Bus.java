package com.app.provider;

//Train.java

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Bus {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String source;
 private String destination;
 private LocalDate arrivalDate;
 private LocalDate departureDate;
private String busName;
 private double busFare;

 // Getters and Setters

 public Long getId() {
     return id;
 }

 public void setId(Long id) {
     this.id = id;
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

 
 public String getBusName() {
     return busName;
 }

 public void setBusName(String busName) {
     this.busName = busName;
 }

 public double getBusFare() {
     return busFare;
 }

 public void setBusFare(double busFare) {
     this.busFare = busFare;
 }
}


