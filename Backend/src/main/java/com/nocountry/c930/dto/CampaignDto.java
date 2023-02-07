package com.nocountry.c930.dto;

import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Date;

@Getter
@Setter
public class CampaignDto {

    private Long campaignId;

    private String name;

    private String description;

    private Date creationDate;

    private Date closingDate;

    private BigDecimal goalMoney;

    private BigDecimal currentMoney;

    private CampaignStatus status;

    // private Set<DonationTierDto> donationTiers;

    private UserDto creator;
}
