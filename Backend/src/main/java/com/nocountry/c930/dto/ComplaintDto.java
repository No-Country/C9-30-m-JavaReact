package com.nocountry.c930.dto;

import com.nocountry.c930.entity.UserCampaign;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class ComplaintDto {

    private Long complaintId;

    private String description;

    private Date creationDate;

    private UserCampaign userCampaignId;

}
