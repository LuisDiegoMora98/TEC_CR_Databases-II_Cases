package com.example.case1.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.sql.Date;

@Entity
@Table(name="sd_problems")
public class sd_problems {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer problemid;
    private String title;
    private String description;
    private Date creationdate;
    private Boolean active;

    @Column(name = "ownerid", insertable = false, updatable = false)
    private Long ownerid;

    @ManyToOne
    @JoinColumn(name="ownerid", nullable=false)
    private sd_owners owner;
    
    protected sd_problems() {}

    public sd_problems(String pTitle, String pDescription,
                        Date pCreationDate, Boolean pActive,
                        Long pOwnerId, sd_owners pOwner){
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

    public sd_owners getOwner() {
        return owner;
    }

    public void setOwner(sd_owners pOwner) {
        this.owner = pOwner;
    }

}