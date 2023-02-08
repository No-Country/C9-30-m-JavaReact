package com.nocountry.c930.service;

import com.nocountry.c930.dto.CommentDto;

public interface ICommentService {

    CommentDto createComment(Long id, CommentDto dto);

    CommentDto getComment(Long id);

    CommentDto updateComment(Long id, CommentDto dto);

    void deleteComment(Long id);
    
}
