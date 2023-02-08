package com.nocountry.c930.service.impl;

import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.entity.UserEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import com.nocountry.c930.mapper.CampaignMap;
import com.nocountry.c930.mapper.exception.ParamNotFound;
import com.nocountry.c930.repository.CampaignRepository;
import com.nocountry.c930.repository.UserRepository;
import com.nocountry.c930.service.ICampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

public class CampaignServiceImpl implements ICampaignService {

    @Autowired
    UserRepository userRepo;
    @Autowired
    CampaignRepository campaignRepo;

    @Autowired
    CampaignMap campaignMap;

    @Override
    public CampaignDto createCampaign(CampaignDto dto) {

        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity user = userRepo.findByEmail(userEmail);

        CampaignEntity entity = new CampaignEntity();

        entity.setStatus(CampaignStatus.OPEN);
        entity.setCreator(user);

        return campaignMap.campaignEntity2Dto(campaignRepo.save(entity));
    }

    @Override
    public CampaignDto getCampaign(Long id) {

        CampaignEntity campaign = campaignRepo.findById(id).orElseThrow(
                () -> new ParamNotFound("Campaign doesn't exist"));

        return campaignMap.campaignEntity2Dto(campaign);
    }

    @Override
    public CampaignDto updateCampaign(Long id, CampaignDto dto) {

        if (!campaignRepo.existsById(id)) {
            throw new ParamNotFound("Campaign doesn't exist");
        } else {
            CampaignEntity entity = campaignMap.campaignDto2Entity(dto);
            entity.setCampaignId(id);
        }

        return dto;
    }

    @Override
    public void deleteCampaign(Long id) {

        CampaignEntity campaign = campaignRepo.findById(id).orElseThrow(
                () -> new ParamNotFound("Campaign doesn't exist"));

        campaignRepo.delete(campaign);
    }
}
