package com.nocountry.c930.entity;

import com.nocountry.c930.enumeration.PaymentStatus;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "DONATIONS")
public class DonationEntity implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DONATION_ID")
    private Long donationId;

    @Column(name = "CREATION_DATE", nullable = false)
    private Date creationDate;

    @Column(name = "AMOUNT", nullable = false)
    private BigDecimal amount;

    @Column(name = "STATUS", nullable = false)
    private PaymentStatus status;

    @ManyToOne
    @JoinColumn(name = "USER_CAMPAIGN_ID")
    private UserCampaign userCampaign;



}
