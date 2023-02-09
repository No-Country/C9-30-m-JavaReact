package com.nocountry.c930.mapper;

import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.entity.CampaignEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CampaignMap {

    @Autowired
    private UserMap userMap;


    public CampaignDto campaignEntity2Dto(CampaignEntity original) {

        CampaignDto copy = new CampaignDto();

        copy.setCampaignId(original.getCampaignId());
        copy.setName(original.getName());
        copy.setDescription(original.getDescription());
        copy.setCreationDate(original.getCreationDate());
        copy.setClosingDate(original.getClosingDate());
        copy.setGoalMoney(original.getGoalMoney());
        copy.setCurrentMoney(original.getCurrentMoney());
        copy.setStatus(original.getStatus());

        copy.setCreator(userMap.userEntity2Dto(original.getCreator()));

        return copy;

    }

    public List<CampaignDto> campaignEntityList2Dto(List<CampaignEntity> entities) {

        List<CampaignDto> dtos = new ArrayList<>();

        for (CampaignEntity entity : entities) {
            dtos.add(campaignEntity2Dto(entity));
        }

        return dtos;
    }

    public CampaignEntity campaignDto2Entity(CampaignDto original) {

        CampaignEntity copy = new CampaignEntity();
        copy.setCampaignId(original.getCampaignId());
        copy.setName(original.getName());
        copy.setDescription(original.getDescription());
        copy.setCreationDate(original.getCreationDate());
        copy.setClosingDate(original.getClosingDate());
        copy.setGoalMoney(original.getGoalMoney());
        copy.setCurrentMoney(original.getCurrentMoney());
        copy.setStatus(original.getStatus());

        copy.setCreator(userMap.userDto2Entity(original.getCreator()));

        return copy;

    }
}
