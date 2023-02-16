package com.nocountry.c930.service.impl;

import com.nocountry.c930.dto.CampaignBasicDto;
import com.nocountry.c930.dto.DonationDto;
import com.nocountry.c930.dto.PageDto;
import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.entity.DonationEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import com.nocountry.c930.mapper.DonationMap;
import com.nocountry.c930.repository.CampaignRepository;
import com.nocountry.c930.repository.DonationRepository;
import com.nocountry.c930.service.IDonationService;
import com.nocountry.c930.service.IUtilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DonationServiceImpl implements IDonationService {

    @Autowired
    private DonationRepository donationRepo;

    @Autowired
    private DonationMap donationMap;

    @Autowired
    private IUtilService util;

    @Override
    public DonationDto createDonation(DonationDto dto) {

        return null;
    }

    @Override
    public DonationDto getDonation(Long id) {


        return null;
    }

    @Override
    public DonationDto updateDonation(Long id, DonationDto dto) {

        return dto;
    }

    @Override
    public void deleteDonation(Long id) {

    }

}
