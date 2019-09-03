package com.bitgroupware.project.beans;


import lombok.Data;

@Data
public class ProjectWbsDto {
	
	
	private int prjWorksNo;
	private int prjCode;
	private String prjWorkName;
	private int prjGroup;
	private int prjStep;
	private int prjDepth;
	private String prjManager;
	private String prjOutput;
	private String prjWbsStart;
	private String prjWbsEnd;
	private int prjWorkCompletion;
	private String prjTotalDays;
	
	public ProjectWbsDto() {
		
	}
	
	public ProjectWbsDto(int prjCode, int prjGroup, int prjStep, int prjDepth, int prjWorkCompletion, String prjWorkName, 
						String prjWbsStart, String prjWbsEnd, String prjManager, String prjOutput, String prjTotalDays) {
		this.prjCode = prjCode;
		this.prjGroup = prjGroup;
		this.prjStep = prjStep;
		this.prjDepth = prjDepth;
		this.prjWorkCompletion = prjWorkCompletion;
		this.prjWorkName = prjWorkName;
		this.prjWbsStart = prjWbsStart;
		this.prjWbsEnd = prjWbsEnd;
		this.prjManager = prjManager;
		this.prjOutput = prjOutput;
		this.prjTotalDays = prjTotalDays;
	}
}
