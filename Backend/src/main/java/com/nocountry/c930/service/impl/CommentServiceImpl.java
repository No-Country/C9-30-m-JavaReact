package com.nocountry.c930.service.impl;

import com.nocountry.c930.dto.CommentDto;
import com.nocountry.c930.entity.CampaignEntity;
import com.nocountry.c930.entity.CommentEntity;
import com.nocountry.c930.entity.UserCampaign;
import com.nocountry.c930.entity.UserEntity;
import com.nocountry.c930.enumeration.CampaignStatus;
import com.nocountry.c930.mapper.CommentMap;
import com.nocountry.c930.mapper.exception.ParamNotFound;
import com.nocountry.c930.repository.CommentRepository;
import com.nocountry.c930.repository.UserCampaignRepository;
import com.nocountry.c930.repository.UserRepository;
import com.nocountry.c930.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

public class CommentServiceImpl implements ICommentService {
    
    @Autowired
    UserRepository userRepo;

    @Autowired
    UserCampaignRepository userCampaingRepo;

    @Autowired
    CommentRepository commentRepo;

    @Autowired
    CommentMap commentMap;

    @Override
    public CommentDto createComment(Long id, CommentDto dto) {

        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity user = userRepo.findByEmail(userEmail);
        if(userCampaingRepo.existsByUserId(user.getUserId()) != null && userCampaingRepo.existsByCampaignId( id) !=null) {

            UserCampaign userCampaign = new UserCampaign();
            //CampaignEntity campaign = campaignRepo.findById(id);

            userCampaign.setUser(user);
            //serCampaign.setCampaign(campaign);
        }

        CommentEntity comment =  commentMap.commentDto2Entity(dto);

        CampaignEntity entity = new CampaignEntity();

        return commentMap.commentEntity2Dto(comment);
    }

    @Override
    public CommentDto getComment(Long id) {

        CommentEntity comment = commentRepo.findById(id).orElseThrow(
                () -> new ParamNotFound("Comment doesn't exist"));

        return commentMap.commentEntity2Dto(comment);
    }

    @Override
    public CommentDto updateComment(Long id, CommentDto dto) {

        if (!commentRepo.existsById(id)) {
            throw new ParamNotFound("Comment doesn't exist");
        } else {
            CommentEntity entity = commentMap.commentDto2Entity(dto);
            entity.setCommentId(id);
        }

        return dto;
    }

    @Override
    public void deleteComment(Long id) {

        CommentEntity comment = commentRepo.findById(id).orElseThrow(
                () -> new ParamNotFound("Comment doesn't exist"));

        commentRepo.delete(comment);
    }
}
