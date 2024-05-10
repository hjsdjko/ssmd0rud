package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscusstongzhuangshangchengEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscusstongzhuangshangchengVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscusstongzhuangshangchengView;


/**
 * 童装商城评论表
 *
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
public interface DiscusstongzhuangshangchengService extends IService<DiscusstongzhuangshangchengEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscusstongzhuangshangchengVO> selectListVO(Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
   	
   	DiscusstongzhuangshangchengVO selectVO(@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
   	
   	List<DiscusstongzhuangshangchengView> selectListView(Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
   	
   	DiscusstongzhuangshangchengView selectView(@Param("ew") Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscusstongzhuangshangchengEntity> wrapper);
   	
}

