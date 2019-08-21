package com.bitgroupware.project.beans;

import java.sql.Date;

import lombok.Data;

@Data
public class ProjectInfoDto {
	private int prjCode;
	private String prjName;
	private int prjDeposit;
	private int prjWorkingExpenses;
	private Date prjStart;
	private Date prjEnd;
	private String prjMothercompany;
	private int prjCompletion;
	private String memId;
	private String memName;
	
}
