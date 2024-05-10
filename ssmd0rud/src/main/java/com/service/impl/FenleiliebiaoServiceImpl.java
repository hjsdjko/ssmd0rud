package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.FenleiliebiaoDao;
import com.entity.FenleiliebiaoEntity;
import com.service.FenleiliebiaoService;
import com.entity.vo.FenleiliebiaoVO;
import com.entity.view.FenleiliebiaoView;

@Service("fenleiliebiaoService")
public class FenleiliebiaoServiceImpl extends ServiceImpl<FenleiliebiaoDao, FenleiliebiaoEntity> implements FenleiliebiaoService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<FenleiliebiaoEntity> page = this.selectPage(
                new Query<FenleiliebiaoEntity>(params).getPage(),
                new EntityWrapper<FenleiliebiaoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<FenleiliebiaoEntity> wrapper) {
		  Page<FenleiliebiaoView> page =new Query<FenleiliebiaoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<FenleiliebiaoVO> selectListVO(Wrapper<FenleiliebiaoEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public FenleiliebiaoVO selectVO(Wrapper<FenleiliebiaoEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<FenleiliebiaoView> selectListView(Wrapper<FenleiliebiaoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public FenleiliebiaoView selectView(Wrapper<FenleiliebiaoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
