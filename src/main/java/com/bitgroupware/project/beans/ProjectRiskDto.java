package com.bitgroupware.project.beans;

import java.util.Date;

import lombok.Data;

@Data
public class ProjectRiskDto {
	
	private int rskCode;
	private String rskTitle;
	private String rskContent;
	private Date rskReg;
	private int rskStatus;
	private String rskWriter;
	private String rskSolver;
	private String rskSolution;
	private Date rskEnd;
	private String rskResult;
	private int prjCode;
	
}
