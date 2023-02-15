package com.nocountry.c930.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CommentDto {

    private Long commentId;

    private String description;

    private Date creationDate;

    private UserDto user;

    private CampaignDto campaign;

}
