package com.nocountry.c930.service.impl;

import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.entity.RoleEntity;
import com.nocountry.c930.entity.UserEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import com.nocountry.c930.enumeration.RoleName;
import com.nocountry.c930.mapper.CampaignMap;
import com.nocountry.c930.mapper.exception.NotAllowed;
import com.nocountry.c930.mapper.exception.ParamNotFound;
import com.nocountry.c930.repository.CampaignRepository;
import com.nocountry.c930.repository.RoleRepository;
import com.nocountry.c930.repository.UserRepository;
import com.nocountry.c930.service.ICampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.security.auth.message.AuthException;

public class CampaignServiceImpl implements ICampaignService {

    @Autowired
    UserRepository userRepo;
    @Autowired
    CampaignRepository campaignRepo;

    @Autowired
    RoleRepository roleRepo;

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

        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity user = userRepo.findByEmail(userEmail);

        RoleEntity admin = roleRepo.findByName(RoleName.ROLE_ADMIN);

        CampaignEntity campaign = campaignRepo.findById(id).orElseThrow(
                () -> new ParamNotFound("Campaign doesn't exist"));

        if (campaign.getCreator() != user && user.getRole() != admin) {
            throw new NotAllowed("You don't have permission to do that");
        }

        campaign.setName(dto.getName());
        campaign.setDescription(dto.getDescription());
        campaign.setStatus(dto.getStatus());

        return campaignMap.campaignEntity2Dto(campaignRepo.save(campaign));

    }

    @Override
    public void deleteCampaign(Long id) {

        CampaignEntity campaign = campaignRepo.findById(id).orElseThrow(
                () -> new ParamNotFound("Campaign doesn't exist"));

        campaignRepo.delete(campaign);
    }
}
