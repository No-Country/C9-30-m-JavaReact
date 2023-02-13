package com.nocountry.c930.mapper;

import com.nocountry.c930.dto.DonationTierDto;
import com.nocountry.c930.entity.DonationTierEntity;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class DonationTierMap {

    public DonationTierDto tierEntity2Dto(DonationTierEntity entity) {
        DonationTierDto dto = new DonationTierDto();

        dto.setTierName(entity.getTierName());
        dto.setDescription(entity.getDescription());
        dto.setPrice(entity.getPrice());
        dto.setTierId(entity.getDonationTierId());

        return dto;
    }

    public DonationTierEntity tierDto2Entity(DonationTierDto dto) {

        DonationTierEntity entity = new DonationTierEntity();

        entity.setTierName(dto.getTierName());
        entity.setPrice(dto.getPrice());
        entity.setDescription(dto.getDescription());
        if (dto.getTierId() != null) {
            entity.setDonationTierId(dto.getTierId());
        }

        return entity;
    }

    public Set<DonationTierEntity> tierDtoSet2Entity(Set<DonationTierDto> dtos) {

        Set<DonationTierEntity> entities = new HashSet<>();

        for (DonationTierDto dto : dtos) {

            entities.add(tierDto2Entity(dto));
        }

        return entities;
    }

    public Set<DonationTierDto> tierEntitySet2Dto(Set<DonationTierEntity> entites) {

        Set<DonationTierDto> dtos = new HashSet<>();

        for (DonationTierEntity entity : entites) {

            dtos.add(tierEntity2Dto(entity));
        }

        return dtos;

    }

}
