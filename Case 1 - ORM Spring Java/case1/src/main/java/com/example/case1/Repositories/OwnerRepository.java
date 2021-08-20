package com.example.case1.Repositories;

import java.util.List;
import com.example.case1.Entities.Owner;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends CrudRepository<Owner, Integer> {
    List<Owner> findBylastname(String pLastName);
    Owner findByownerid(long pId);
}