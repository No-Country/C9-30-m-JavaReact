package com.nocountry.c930.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class DonationTierDto {

    private Long tierId;
    private String tierName;

    private BigDecimal price;

    private String description;
}
