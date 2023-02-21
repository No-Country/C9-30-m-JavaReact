package com.nocountry.c930.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

@Getter
@Setter
public class CampaignCreationDto {

    private String name;

    private String description;

    private Date closingDate;

    private BigDecimal goalMoney;

    private MultipartFile image;

    private List<TierCreationDto> donationTiers;

}
