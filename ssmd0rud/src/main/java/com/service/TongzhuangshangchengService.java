package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.TongzhuangshangchengEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.TongzhuangshangchengVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.TongzhuangshangchengView;


/**
 * 童装商城
 *
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
public interface TongzhuangshangchengService extends IService<TongzhuangshangchengEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<TongzhuangshangchengVO> selectListVO(Wrapper<TongzhuangshangchengEntity> wrapper);
   	
   	TongzhuangshangchengVO selectVO(@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);
   	
   	List<TongzhuangshangchengView> selectListView(Wrapper<TongzhuangshangchengEntity> wrapper);
   	
   	TongzhuangshangchengView selectView(@Param("ew") Wrapper<TongzhuangshangchengEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<TongzhuangshangchengEntity> wrapper);
   	
}

