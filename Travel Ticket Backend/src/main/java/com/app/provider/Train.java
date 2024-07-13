package com.app.provider;

//Train.java

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Train {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String source;
 private String destination;
 private LocalDate arrivalDate;
 private LocalDate departureDate;
private String trainName;
 private double trainFare;

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

 
 public String getTrainName() {
     return trainName;
 }

 public void setTrainName(String trainName) {
     this.trainName = trainName;
 }

 public double getTrainFare() {
     return trainFare;
 }

 public void setTrainFare(double trainFare) {
     this.trainFare = trainFare;
 }
}

