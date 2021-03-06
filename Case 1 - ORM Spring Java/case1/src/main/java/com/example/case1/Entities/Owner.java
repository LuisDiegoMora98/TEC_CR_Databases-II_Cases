package com.example.case1.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.*;
import java.sql.Date;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity     //relaciona la clase en java con la entidad en la base de datos
@Table(name="sd_owners")
public class Owner {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ownerid;
    private String firstname;
    private String lastname;
    private String email;
    private byte[] password;
    private Boolean enabled;
    private Date creationdate;


    @JsonManagedReference           //para manejar la relacion entre entidades (para requests http)
    @OneToMany(mappedBy="owner")    //indica que "owner" tiene una relación 1 a N con "problems"
    private Set<Problem> problems;

    protected Owner() {}

    public Owner(String pFirstName, String pLastname,
                 String pEmail, byte[] pPassword,
                 Boolean pEnabled, Date pCreationDate) {
        this.firstname = pFirstName;
        this.lastname = pLastname;
        this.email = pEmail;
        this.password = pPassword;
        this.enabled = pEnabled;
        this.creationdate = pCreationDate;
    }

    @Override
    public String toString() {
        return "Owner{ownerid=" + this.ownerid + ", firstname=" + this.firstname +
                ", lastname=" + this.lastname + ", email=" + this.email + 
                ", password=" +  this.password + ", enabled=" + this.enabled +
                ", creationDate=" + this.creationdate + "}";
    
    }

    public Long getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(Long pOwnerid) {
        this.ownerid = pOwnerid;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String pFirstname) {
        this.firstname = pFirstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String pLastname) {
        this.lastname = pLastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String pEmail) {
        this.email = pEmail;
    }

    public byte[] getPassword() {
        return password;
    }

    public void setPassword(byte[] pPassword) {
        this.password = pPassword;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean pEnabled) {
        this.enabled = pEnabled;
    }

    public Date getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(Date pCreationdate) {
        this.creationdate = pCreationdate;
    }

    public Set<Problem> getProblems() {
        return problems;
    }

    public void setProblems(Set<Problem> pProblems) {
        this.problems = pProblems;
    }

}
