package com.bitgroupware.admin.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.bitgroupware.admin.beans.ApprovalDoucemtDto;

@Mapper
public interface ApprovalDocumentDao {

	// 모든 문서양식 불러오기
	@Select("SELECT * FROM APPROVAL_DOCUMENT")
	List<ApprovalDoucemtDto> selectApprovalDocList();
	
	// 상세페이지
	@Select("SELECT * FROM APPROVAL_DOCUMENT WHERE APDOC_NO = #{apdocNo}")
	void selectApprovalDoc(int apdocNo);

	// 등록
	@Insert("INSERT INTO APPROVAL_DOCUMENT (APDOC_NAME,APDOC_FORM) VALUES (#{apdocName}, #{apdocForm})")
	void insertApprovalDoc(ApprovalDoucemtDto dto);

	// 수정
	@Update("")
	void updateApprovalDoc(ApprovalDoucemtDto dto);

}
