package com.bitgroupware.community.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.bitgroupware.community.vo.AnonymousBoardVo;

public interface AnonymousBoardRepository extends JpaRepository<AnonymousBoardVo, Integer>, QuerydslPredicateExecutor<AnonymousBoardVo>{

}
