package com.nocountry.c930.service;


import com.nocountry.c930.dto.*;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;

import java.util.Set;

public interface ICampaignService {

    CampaignDto createCampaign(CampaignCreationDto dto);

    CampaignDto getCampaign(Long id);

    PageDto<CampaignBasicDto> listAllCampaigns(Pageable page, HttpServletRequest request);

    CampaignDto updateCampaign(Long id, UpdateCampaignDto dto);

    Set<DonationDto> findAllDonations(Long id);

    void deleteCampaign(Long id);
}
