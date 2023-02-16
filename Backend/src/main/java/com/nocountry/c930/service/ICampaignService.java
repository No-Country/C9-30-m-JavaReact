package com.nocountry.c930.service;


import com.nocountry.c930.dto.*;
import com.nocountry.c930.entity.DonationEntity;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Set;

public interface ICampaignService {

    CampaignDto createCampaign(CampaignCreationDto dto);

    CampaignDto getCampaign(Long id);

    PageDto<CampaignBasicDto> listAllCampaigns(Pageable page, HttpServletRequest request);

    Set<DonationDto> findAllDonations(Long id);

    CampaignDto updateCampaign(Long id, CampaignDto dto);

    void deleteCampaign(Long id);
}
