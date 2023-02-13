package com.nocountry.c930.controller;

import com.nocountry.c930.dto.CampaignCreationDto;
import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.service.ICampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/campaigns")
public class CampaignController {

    @Autowired
    private ICampaignService campaignService;

    @PostMapping()
    public ResponseEntity<CampaignDto> createCampaign(@RequestBody CampaignCreationDto dto) {

        CampaignDto campaign = campaignService.createCampaign(dto);

        return ResponseEntity.status(HttpStatus.OK).body(campaign);
    }


}
