package com.bitgroupware.community.persistence;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

import com.bitgroupware.community.vo.AnonymousBoardVo;

public interface AnonymousBoardRepository extends JpaRepository<AnonymousBoardVo, Integer>, QuerydslPredicateExecutor<AnonymousBoardVo>{

	AnonymousBoardVo findByBnoAndBpw(int bno, String bpw);

	@Query(value = "select ifnull(max(bno),0) from anonymous_board", nativeQuery = true)
	int selectMaxBno();
	
	@Modifying
	@Transactional
	@Query(value = "update anonymous_board set bstep = bstep + 1 where bgroup = ?1 and bstep > ?2", nativeQuery = true)
	void replyShape(int bgroup, int bstep);

	@Modifying
	@Transactional
	@Query(value = "alter table anonymous_board auto_increment=0", nativeQuery = true)
	void initAutoIncrement();

	@Query(value = "select * from anonymous_board order by bGroup desc, bStep asc", nativeQuery = true)
	List<AnonymousBoardVo> findAllByOrderByBgroupDescAndBstepAsc();


}
