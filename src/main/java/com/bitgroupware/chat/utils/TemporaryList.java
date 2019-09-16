package com.bitgroupware.chat.utils;

import com.bitgroupware.chat.Beans.MemberDto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TemporaryList {

	public MemberDto member;
	public String content;
}
