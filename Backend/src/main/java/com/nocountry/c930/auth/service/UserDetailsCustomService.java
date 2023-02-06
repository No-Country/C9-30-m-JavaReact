package com.nocountry.c930.auth.service;


import com.nocountry.c930.auth.dto.ResponseUserDto;
import com.nocountry.c930.auth.dto.UserRegistrationDto;
import com.nocountry.c930.entity.RoleEntity;
import com.nocountry.c930.entity.UserEntity;
import com.nocountry.c930.enumeration.RoleName;
import com.nocountry.c930.mapper.UserMap;
import com.nocountry.c930.mapper.exception.RepeatedUsername;
import com.nocountry.c930.repository.RoleRepository;
import com.nocountry.c930.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;

@Service
public class UserDetailsCustomService implements UserDetailsService {

  @Autowired
  private UserRepository userRepo;
  @Autowired
  private RoleRepository roleRepo;
  @Autowired
  private UserMap userMap;

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    UserEntity userEntity = userRepo.findByEmail(email);
    if (userEntity == null) {
      throw new UsernameNotFoundException("username or password not found");
    }
    return UserDetailsImpl.build(userEntity);
  }

  public ResponseUserDto save(@Valid UserRegistrationDto userDto) throws RepeatedUsername {

    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    if (userRepo.findByEmail(userDto.getEmail()) != null) {
      throw new RepeatedUsername("email already exist");
    }

    if (!userDto.getPassword().equals(userDto.getPasswordConfirm()) ){

      throw new RuntimeException("Passwords dont coincide");
    }
    UserEntity userEntity = new UserEntity();
    userEntity.setEmail(userDto.getEmail());
    userEntity.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
    userEntity.setFirstName(userDto.getFirstName());
    userEntity.setLastName(userDto.getLastName());


    RoleEntity role = roleRepo.findByName(RoleName.ROLE_USER);
    userEntity.setRole(role);

    UserEntity entitySaved = this.userRepo.save(userEntity);


    ResponseUserDto responseUserDto = userMap.userAuthEntity2Dto(entitySaved);


    return responseUserDto;


  }

  public ResponseUserDto saveAdmin(@Valid UserRegistrationDto userDto) throws RepeatedUsername {
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    if (userRepo.findByEmail(userDto.getEmail()) != null) {
      throw new RepeatedUsername("email already exist");
    }
    if (!userDto.getPassword().equals(userDto.getPasswordConfirm())){

      throw new RuntimeException("Passwords dont coincide");
    }
    UserEntity userEntity = new UserEntity();
    userEntity.setEmail(userDto.getEmail());
    userEntity.setPassword(bCryptPasswordEncoder.encode(userDto.getPassword()));
    userEntity.setFirstName(userDto.getFirstName());
    userEntity.setLastName(userDto.getLastName());
    userEntity.setRole(roleRepo.findByName(RoleName.ROLE_ADMIN));

    UserEntity entitySaved = this.userRepo.save(userEntity);


    ResponseUserDto responseUserDto = userMap.userAuthEntity2Dto(entitySaved);


    return responseUserDto;

  }


}
