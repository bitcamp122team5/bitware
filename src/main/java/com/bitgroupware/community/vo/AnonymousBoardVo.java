package com.bitgroupware.community.vo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity(name = "anonymous_board")
public class AnonymousBoardVo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bno;
	private String bpw;
	private String btitle;
	private String bcontent;
	@Column(insertable = false, updatable = false, columnDefinition = "datetime default current_timestamp")
	private Date bdate;
	private int bgroup;
	@Column(insertable = false, columnDefinition = "int(10) default 0")
	private int bstep;
	@Column(insertable = false, columnDefinition = "int(10) default 0")
	private int bindent;
	@Column(insertable = false, columnDefinition = "int(10) default 0")
	private int bcnt;
}