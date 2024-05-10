package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.FenleiliebiaoEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.FenleiliebiaoVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.FenleiliebiaoView;


/**
 * 分类列表
 *
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
public interface FenleiliebiaoService extends IService<FenleiliebiaoEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<FenleiliebiaoVO> selectListVO(Wrapper<FenleiliebiaoEntity> wrapper);
   	
   	FenleiliebiaoVO selectVO(@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);
   	
   	List<FenleiliebiaoView> selectListView(Wrapper<FenleiliebiaoEntity> wrapper);
   	
   	FenleiliebiaoView selectView(@Param("ew") Wrapper<FenleiliebiaoEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<FenleiliebiaoEntity> wrapper);
   	
}

