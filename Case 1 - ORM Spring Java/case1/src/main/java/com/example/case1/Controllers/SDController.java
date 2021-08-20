package com.example.case1.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.case1.Entities.*;
import com.example.case1.Repositories.*;
import java.util.List;


@RestController
@RequestMapping("/sd")
public class SDController {

    @Autowired
    OwnerRepository ownerRepository;

    @GetMapping("owner/find/{id}")
    public ResponseEntity<?> find(@PathVariable Long id){
        try {
            return new ResponseEntity("User "+id+":\n"+ownerRepository.findByownerid(id).toString(), HttpStatus.CREATED);

        } catch (Exception e){
            return new ResponseEntity("Controller: "+e, HttpStatus.CREATED);
        }
    }

    @GetMapping("owner/findByLastname/{lastname}")
    public ResponseEntity<?> findBylastname(@PathVariable String lastname){
        try {
            return new ResponseEntity(ownerRepository.findBylastname(lastname), HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity("Controller: "+e, HttpStatus.CREATED);
        }
    }

}