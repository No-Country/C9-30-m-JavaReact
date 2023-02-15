package com.nocountry.c930.repository;

import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.entity.UserEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<CampaignEntity, Long> {

    Page<CampaignEntity> findAllByStatus(CampaignStatus status, Pageable page);

    Page<CampaignEntity> findAll(Pageable pageable);

}
