package com.nocountry.c930.controller;

import com.nocountry.c930.dto.CampaignDto;
import com.nocountry.c930.dto.UserDto;
import com.nocountry.c930.service.ICampaignService;
import com.nocountry.c930.service.IUserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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



}
