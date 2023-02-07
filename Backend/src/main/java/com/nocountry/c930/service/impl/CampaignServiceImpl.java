package com.nocountry.c930.service.impl;

import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.entity.UserEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import com.nocountry.c930.mapper.CampaignMap;
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
        return null;
    }

    @Override
    public CampaignDto updateCampaign(Long id, CampaignDto dto) {
        return null;
    }

    @Override
    public void deleteCampaign(Long id) {

    }
}
