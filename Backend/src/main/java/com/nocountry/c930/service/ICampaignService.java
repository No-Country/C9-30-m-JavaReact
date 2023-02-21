package com.nocountry.c930.service;


import com.nocountry.c930.dto.*;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.Set;

public interface ICampaignService {

    CampaignBasicDto createCampaign(CampaignCreationDto dto) throws IOException;

    CampaignDto getCampaign(Long id);

    PageDto<CampaignBasicDto> listAllCampaigns(Pageable page, HttpServletRequest request);

    CampaignDto updateCampaign(Long id, UpdateCampaignDto dto);

    Set<DonationDto> findAllDonations(Long id);

    void updateCampaignMoney(Long idCampaign);

    void deleteCampaign(Long id);
}
