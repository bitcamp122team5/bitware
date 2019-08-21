package com.bitgroupware.admin.service;

import java.util.List;

import com.bitgroupware.admin.beans.ApprovalDoucemtDto;

public interface ApprovalService {
	
	// 모든 문서양식 불러오기
	List<ApprovalDoucemtDto> selectApprovalDocList();
	
	// 상세
	ApprovalDoucemtDto selectApprovalDoc(String apdocNo);
	
	// 등록
	void insertApprovalDoc(ApprovalDoucemtDto dto);
	
	// 수정
	void updateApprovalDoc(ApprovalDoucemtDto dto);

}
