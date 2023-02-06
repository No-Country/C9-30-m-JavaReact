package com.nocountry.c930.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name= "USER_CAMPAIGN")
public class UserCampaign implements Serializable {

    private final static Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userCampaignId;

    @ManyToOne(fetch = FetchType.LAZY,
            cascade
                    = {
                    CascadeType.DETACH,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
                    CascadeType.PERSIST
            })
    @JoinColumn(name = "USER_ID")
    private UserEntity user;
//
//    @ManyToOne(fetch = FetchType.LAZY,
//            cascade
//                    = {
//                    CascadeType.DETACH,
//                    CascadeType.MERGE,
//                    CascadeType.REFRESH,
//                    CascadeType.PERSIST
//            })
//    @JoinColumn(name = "CAMPAIGN_ID")
//    private CampaignEntity campaign;
//
//    @OneToMany(mappedBy = "userCampaign",
//            fetch = FetchType.LAZY,
//            cascade
//                    = {
//                    CascadeType.DETACH,
//                    CascadeType.MERGE,
//                    CascadeType.REFRESH,
//                    CascadeType.PERSIST
//            })
//    Set<CommentEntity> comments;
//
//    @OneToMany(mappedBy = "userCampaign",
//            fetch = FetchType.LAZY,
//            cascade
//                    = {
//                    CascadeType.DETACH,
//                    CascadeType.MERGE,
//                    CascadeType.REFRESH,
//                    CascadeType.PERSIST
//            })
//    Set<ComplaintEntity> complaints;
//
//    @OneToMany(mappedBy = "userCampaign",
//            fetch = FetchType.LAZY,
//            cascade
//                    = {
//                    CascadeType.DETACH,
//                    CascadeType.MERGE,
//                    CascadeType.REFRESH,
//                    CascadeType.PERSIST
//            })
//    Set<DonationEntity> donations;


}
