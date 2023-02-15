package com.nocountry.c930.entity;

import com.nocountry.c930.enumeration.TierName;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "DONATION_TIERS")
public class DonationTierEntity {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donationTierId;

    @Column(name = "TIER_NAME", nullable = false)
    private String tierName;

    @Column(name = "PRICE", nullable = false)
    private BigDecimal price;

    @Column(name = "DESCRIPTION", nullable = false)
    private String description;

    @ManyToOne()
    @JoinColumn(name = "CAMPAIGN_ID")
    private CampaignEntity campaign;
}
