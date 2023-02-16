package com.nocountry.c930.controller;


import com.nocountry.c930.dto.*;
import com.nocountry.c930.entity.DonationEntity;
import com.nocountry.c930.service.ICampaignService;
import com.nocountry.c930.service.IDonationService;
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
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping("/campaigns")
public class CampaignController {

    @Autowired
    private ICampaignService campaignService;

    @Autowired
    private IDonationService donationService;

    @PostMapping()
    @ApiOperation(value = "Creates a new campaign",
            notes = "Must be a logged user, you need to add at least 1 donation tier")
    public ResponseEntity<CampaignDto> createCampaign(@RequestBody CampaignCreationDto dto) {

        CampaignDto campaign = campaignService.createCampaign(dto);

        return ResponseEntity.status(HttpStatus.OK).body(campaign);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete an campaign",
            notes = "Deletes an campaign, only admin and campaign's user creator are allowed to delete")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "Campaign ID is invalid (User number values only)"),
            @ApiResponse(code = 401, message = "You can only delete your own campaign"),
            @ApiResponse(code = 404, message = "Campaign not found")})
    public ResponseEntity<String> deleteCampaign(@PathVariable(name = "id") Long idCampaign) {

        if (campaignService.getCampaign(idCampaign) != null) {
            campaignService.deleteCampaign(idCampaign);
            return ResponseEntity.status(HttpStatus.OK).body("Campaign deleted successfully");
        } else {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Campaign cannot be deleted");
        }

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

    @GetMapping()
    @ApiOperation(value = "List All Campaigns",
            notes = "Gives a paginated list of all the campaigns that are OPEN")
    public ResponseEntity<PageDto<CampaignBasicDto>> getAllCampaigns(@PageableDefault(size = 5) Pageable page,
                                                                 HttpServletRequest request) {


        PageDto<CampaignBasicDto> result = campaignService.listAllCampaigns(page, request);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping(value = "/{id}/donations")
    @ApiOperation(value = "List All Donations",
            notes = "Gives a list of all donations")
    public ResponseEntity<?> getAllDonations(@PathVariable(name = "id") Long idCampaign) {

            Set<DonationDto> donations = campaignService.findAllDonations(idCampaign);

                return ResponseEntity.ok(donations);

    }

}
