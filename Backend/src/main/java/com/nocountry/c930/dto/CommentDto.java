package com.nocountry.c930.dto;


import com.nocountry.c930.entity.UserCampaign;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CommentDto {

    private Long commentId;

    private String description;

    private Date creationDate;

    private UserCampaign userCampaignId;

}
