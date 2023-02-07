package com.nocountry.c930.entity;

import com.nocountry.c930.enumeration.CampaignStatus;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "CAMPAIGNS")
public class CampaignEntity implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long campaignId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "CREATION_DATE")
    @CreationTimestamp
    private Date creationDate;

    @Column(name = "CLOSING_DATE")
    private Date closingDate;

    @Column(name = "GOAL_MONEY")
    private BigDecimal goalMoney;

    @Column(name = "CURRENT_MONEY")
    private BigDecimal currentMoney;

    @Column(name = "STATUS")
    private CampaignStatus status;

    @OneToMany(mappedBy = "campaign")
    private Set<DonationTierEntity> donationTiers;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

}
