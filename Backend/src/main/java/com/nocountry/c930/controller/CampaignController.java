package com.nocountry.c930.controller;


import com.nocountry.c930.dto.CampaignCreationDto;
import com.nocountry.c930.dto.CampaignBasicDto;
import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.dto.PageDto;
import com.nocountry.c930.dto.UserDto;
import com.nocountry.c930.service.ICampaignService;
import com.nocountry.c930.service.IUserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import java.util.List;

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


    @GetMapping("/{id}")
    @ApiOperation(value = "Get Campaign Info",
            notes = "Gets all the campaign information")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Campaign ID is invalid (must use numbers value only)"),
            @ApiResponse(code = 404, message = "Campaign not found")})
    public ResponseEntity<CampaignDto> getCampaign(@PathVariable(name = "id") Long idCampaign) {

        CampaignDto dto = campaignService.getCampaign(idCampaign);

        return ResponseEntity.status(HttpStatus.OK).body(dto);

    }

    @GetMapping("/")
    @ApiOperation(value = "List All Campaigns",
            notes = "Gives a paginated list of all the campaigns")
    public ResponseEntity<PageDto<CampaignBasicDto>> getAllCampaigns(@PageableDefault(size = 5) Pageable page,
                                                                 HttpServletRequest request) {


        PageDto<CampaignBasicDto> result = campaignService.listAllCampaigns(page, request);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

}
