package com.nocountry.c930.dto;

import com.nocountry.c930.enumeration.CampaignStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateCampaignDto {

    private String name;

    private String description;

    private CampaignStatus status;
}
