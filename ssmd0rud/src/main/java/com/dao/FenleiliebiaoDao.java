package com.dao;

import com.entity.FenleiliebiaoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.FenleiliebiaoVO;
import com.entity.view.FenleiliebiaoView;


/**
 * 分类列表
 * 
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
public interface FenleiliebiaoDao extends BaseMapper<FenleiliebiaoEntity> {
	
	List<FenleiliebiaoVO> selectListVO(@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);
	
	FenleiliebiaoVO selectVO(@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);
	
	List<FenleiliebiaoView> selectListView(@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);

	List<FenleiliebiaoView> selectListView(Pagination page,@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);
	
	FenleiliebiaoView selectView(@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);
	
}
