package com.nocountry.c930.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "DONATION_TIERS")
public class DonationTierEntity {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donationTierId;
    
    @ManyToOne()
    @JoinColumn(name = "campaign_id")
    private CampaignEntity campaign;
}
