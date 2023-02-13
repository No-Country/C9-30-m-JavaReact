package com.nocountry.c930.service.impl;

import com.nocountry.c930.dto.CampaignBasicDto;
import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.dto.PageDto;
import com.nocountry.c930.dto.UserDto;
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
import com.nocountry.c930.service.IUtilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CampaignServiceImpl implements ICampaignService {

    @Autowired
    UserRepository userRepo;
    @Autowired
    CampaignRepository campaignRepo;

    @Autowired
    RoleRepository roleRepo;

    @Autowired
    CampaignMap campaignMap;

    @Autowired
    private IUtilService util;

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
    public PageDto<CampaignBasicDto> listAllCampaigns(Pageable page, HttpServletRequest request) {
        PageDto<CampaignBasicDto> pageDto = new PageDto<>();
        Map<String, String> links = new HashMap<>();
        List<CampaignBasicDto> listDto = new ArrayList<>();
        Page<CampaignEntity> elements = campaignRepo.findAll(page);

        elements.getContent().forEach(element -> listDto.add(campaignMap.campaignEntity2BasicDto(element)));
        links.put("next", elements.hasNext() ? util.makePaginationLink(request, page.getPageNumber() + 1) : "");
        links.put("previous", elements.hasPrevious() ? util.makePaginationLink(request, page.getPageNumber() - 1) : "");

        pageDto.setContent(listDto);
        pageDto.setLinks(links);

        return pageDto;
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
