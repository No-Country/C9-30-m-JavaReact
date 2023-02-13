package com.nocountry.c930.service;

import com.nocountry.c930.dto.UserDto;

public interface IUserService {

    UserDto getUser(Long id);
    boolean delete(Long id);
}
