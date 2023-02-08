package com.nocountry.c930.entity;

import javax.persistence.*;

@Entity
public class PaymentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PAYMENT_ID")
    private String paymentId;
}
