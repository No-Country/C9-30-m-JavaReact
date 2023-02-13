package com.nocountry.c930.service;


import com.nocountry.c930.dto.CampaignCreationDto;
import com.nocountry.c930.dto.CampaignBasicDto;
import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.dto.PageDto;
import com.nocountry.c930.dto.UserDto;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;

public interface ICampaignService {

    CampaignDto createCampaign(CampaignCreationDto dto);

    CampaignDto getCampaign(Long id);

    PageDto<CampaignBasicDto> listAllCampaigns(Pageable page, HttpServletRequest request);

    CampaignDto updateCampaign(Long id, CampaignDto dto);

    void deleteCampaign(Long id);
}
