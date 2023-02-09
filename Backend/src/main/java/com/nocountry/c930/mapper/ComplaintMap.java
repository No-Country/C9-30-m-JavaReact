package com.nocountry.c930.mapper;

import com.nocountry.c930.dto.ComplaintDto;
import com.nocountry.c930.entity.ComplaintEntity;

import java.util.ArrayList;
import java.util.List;

public class ComplaintMap {

    public ComplaintDto complaintEntity2Dto(ComplaintEntity original) {

        ComplaintDto copy= new ComplaintDto();

        copy.setComplaintId(original.getComplaintId());
        copy.setDescription(original.getDescription());
        copy.setCreationDate(original.getCreationDate());

        copy.setUserCampaignId(original.getUserCampaignId());

        return copy;

    }

    public List<ComplaintDto> complaintEntityList2Dto(List<ComplaintEntity> entities) {

        List<ComplaintDto> dtos = new ArrayList<>();

        for (ComplaintEntity entity : entities) {
            dtos.add(complaintEntity2Dto(entity));
        }

        return dtos;
    }

    public ComplaintEntity complaintDto2Entity(ComplaintDto original) {

        ComplaintEntity copy = new ComplaintEntity();

        copy.setComplaintId(original.getComplaintId());
        copy.setDescription(original.getDescription());
        copy.setCreationDate(original.getCreationDate());

        copy.setUserCampaignId(original.getUserCampaignId());

        return copy;

    }

}
