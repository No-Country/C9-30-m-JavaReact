package com.nocountry.c930.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

@Getter
@Setter
public class CampaignCreationDto {

    private String name;

    private String description;

    private Date creationDate;

    private Date closingDate;

    private BigDecimal goalMoney;

    private BigDecimal currentMoney;

    private List<DonationTierDto> donationTiers;
}
