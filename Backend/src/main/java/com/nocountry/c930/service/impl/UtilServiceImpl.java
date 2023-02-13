package com.nocountry.c930.service.impl;

import com.nocountry.c930.service.IUtilService;

import javax.servlet.http.HttpServletRequest;

public class UtilServiceImpl implements IUtilService {
    @Override
    public String makePaginationLink(HttpServletRequest request, int page) {
        return String.format("%s?page=%d", request.getRequestURI(), page);
    }
}
