package com.nocountry.c930.repository;

import com.nocountry.c930.entity.UserCampaign;
import com.nocountry.c930.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCampaignRepository extends JpaRepository<UserCampaign, Long> {

    UserEntity existsByUserId(Long id);

    UserCampaign existsByCampaignId(Long id);

}
