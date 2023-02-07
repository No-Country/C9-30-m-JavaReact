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


    public CampaignDto campaignEntity2Dto(CampaignEntity entity) {

        CampaignDto dto = new CampaignDto();

        dto.setCampaignId(entity.getCampaignId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setCreationDate(entity.getCreationDate());
        dto.setClosingDate(entity.getClosingDate());
        dto.setGoalMoney(entity.getGoalMoney());
        dto.setCurrentMoney(entity.getCurrentMoney());
        dto.setStatus(entity.getStatus());

        dto.setCreator(userMap.userEntity2Dto(entity.getCreator()));

        return dto;

    }

    public List<CampaignDto> campaignEntityList2Dto(List<CampaignEntity> entities) {

        List<CampaignDto> dtos = new ArrayList<>();

        for (CampaignEntity entity : entities) {
            dtos.add(campaignEntity2Dto(entity));
        }

        return dtos;
    }
}
