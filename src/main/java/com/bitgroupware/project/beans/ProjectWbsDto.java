package com.bitgroupware.project.beans;

import java.sql.Date;

import lombok.Data;

@Data
public class ProjectWbsDto {
	
	private int prj_works_no;
	private int prj_code;
	private String prj_works;
	private int prj_group;
	private int prj_step;
	private int prj_indent;
	private String prj_manager;
	private String prj_outputs;
	private Date prj_plan_start;
	private Date prj_plan_end;
	private Date prj_work_start;
	private Date prj_work_end;
	private int prj_work_completion;
}
