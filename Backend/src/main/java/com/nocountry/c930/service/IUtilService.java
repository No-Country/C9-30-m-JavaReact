package com.nocountry.c930.service;

import com.nocountry.c930.entity.UserEntity;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;

public interface IUtilService {

    String makePaginationLink(HttpServletRequest request, int page);
    int calculateDaysLeft(Date date);

    UserEntity getLoggedUser();
}
