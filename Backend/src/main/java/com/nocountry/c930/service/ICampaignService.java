package com.nocountry.c930.service;

import com.nocountry.c930.dto.CampaignDto;

public interface ICampaignService {

    CampaignDto createCampaign(CampaignDto dto);

    CampaignDto getCampaign(Long id);

    CampaignDto updateCampaign(Long id, CampaignDto dto);

    void deleteCampaign(Long id);
}
