package com.nocountry.c930.service;

import javax.servlet.http.HttpServletRequest;

public interface IUtilService {

    String makePaginationLink(HttpServletRequest request, int page);
}
