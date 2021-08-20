package com.example.case1.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.sql.Date;

@Entity(name = "sd_problems")
@Table(name="sd_problems", schema = "dbo")
public class Problem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer problemid;
    private String title;
    private String description;
    private Date creationdate;
    private Boolean active;

    @Column(name = "ownerid", insertable = false, updatable = false)
    private Long ownerid;


    @JsonBackReference
    @ManyToOne//(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="ownerid", nullable=false)
    private Owner owner;
    
    protected Problem() {}

    public Problem(String pTitle, String pDescription,
                        Date pCreationDate, Boolean pActive,
                        Long pOwnerId, Owner pOwner){
        this.title = pTitle;
        this.description = pDescription;
        this.creationdate = pCreationDate;
        this.active = pActive;
        this.ownerid = pOwnerId;
        this.owner = pOwner;
    }

    public Integer getProblemid() {
        return problemid;
    }

    public void setProblemid(Integer pProblemid) {
        this.problemid = pProblemid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String pTitle) {
        this.title = pTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String pDescription) {
        this.description = pDescription;
    }

    public Date getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(Date pCreationdate) {
        this.creationdate = pCreationdate;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean pActive) {
        this.active = pActive;
    }

    public Long getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(Long pOwnerid) {
        this.ownerid = pOwnerid;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner pOwner) {
        this.owner = pOwner;
    }

}