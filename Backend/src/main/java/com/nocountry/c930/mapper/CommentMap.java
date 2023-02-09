package com.nocountry.c930.mapper;

import com.nocountry.c930.dto.CommentDto;
import com.nocountry.c930.dto.UserDto;
import com.nocountry.c930.entity.CommentEntity;
import com.nocountry.c930.entity.UserEntity;

import java.util.ArrayList;
import java.util.List;

public class CommentMap {

    public CommentDto commentEntity2Dto(CommentEntity original) {

        CommentDto copy = new CommentDto();

        copy.setCommentId(original.getCommentId());
        copy.setDescription(original.getDescription());
        copy.setCreationDate(original.getCreationDate());
        copy.setUserCampaignId(original.getUserCampaignId());

        return copy;
    }

    public List<CommentDto> commentEntityList2DtoList(List<CommentEntity> entities) {

        List<CommentDto> dtos = new ArrayList<>();

        for (CommentEntity entity : entities) {
            dtos.add(commentEntity2Dto(entity));
        }

        return dtos;

    }

    public CommentEntity commentDto2Entity(CommentDto original) {

        CommentEntity copy = new CommentEntity();

        copy.setCommentId(original.getCommentId());
        copy.setDescription(original.getDescription());
        copy.setCreationDate(original.getCreationDate());
        copy.setUserCampaignId(original.getUserCampaignId());

        return copy;
    }

}
