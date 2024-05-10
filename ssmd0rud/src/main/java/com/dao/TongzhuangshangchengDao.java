package com.dao;

import com.entity.TongzhuangshangchengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.TongzhuangshangchengVO;
import com.entity.view.TongzhuangshangchengView;


/**
 * 童装商城
 * 
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
public interface TongzhuangshangchengDao extends BaseMapper<TongzhuangshangchengEntity> {
	
	List<TongzhuangshangchengVO> selectListVO(@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);
	
	TongzhuangshangchengVO selectVO(@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);
	
	List<TongzhuangshangchengView> selectListView(@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);

	List<TongzhuangshangchengView> selectListView(Pagination page,@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);
	
	TongzhuangshangchengView selectView(@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);
	
}
