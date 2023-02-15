package com.nocountry.c930.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name= "COMMENTS")
public class CommentEntity implements Serializable {

    private static final Long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COMMENT_ID")
    private Long commentId;

    @Column(name = "DESCRIPTION", nullable = false)
    private String description;

    @Column(name = "CREATION_DATE", nullable = false)
    private Date creationDate;

    @ManyToOne
    @JoinColumn(name = "USER")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "CAMPAIGN")
    private CampaignEntity campaign;

}
