package com.dao;

import com.entity.DiscusstongzhuangshangchengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscusstongzhuangshangchengVO;
import com.entity.view.DiscusstongzhuangshangchengView;


/**
 * 童装商城评论表
 * 
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
public interface DiscusstongzhuangshangchengDao extends BaseMapper<DiscusstongzhuangshangchengEntity> {
	
	List<DiscusstongzhuangshangchengVO> selectListVO(@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
	
	DiscusstongzhuangshangchengVO selectVO(@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
	
	List<DiscusstongzhuangshangchengView> selectListView(@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);

	List<DiscusstongzhuangshangchengView> selectListView(Pagination page,@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
	
	DiscusstongzhuangshangchengView selectView(@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
	
}
