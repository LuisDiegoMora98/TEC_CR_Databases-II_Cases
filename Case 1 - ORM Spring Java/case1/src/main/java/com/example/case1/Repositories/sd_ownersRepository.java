package com.example.case1.Repositories;

import java.util.List;
import com.example.case1.Entities.sd_owners;

import org.springframework.data.repository.CrudRepository;

public interface sd_ownersRepository extends CrudRepository<sd_owners, Integer> {
    List<sd_owners> findBylastname(String pLastName);
    sd_owners findByownerid(long pId);
}