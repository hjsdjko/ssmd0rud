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


import com.dao.DiscusstongzhuangshangchengDao;
import com.entity.DiscusstongzhuangshangchengEntity;
import com.service.DiscusstongzhuangshangchengService;
import com.entity.vo.DiscusstongzhuangshangchengVO;
import com.entity.view.DiscusstongzhuangshangchengView;

@Service("discusstongzhuangshangchengService")
public class DiscusstongzhuangshangchengServiceImpl extends ServiceImpl<DiscusstongzhuangshangchengDao, DiscusstongzhuangshangchengEntity> implements DiscusstongzhuangshangchengService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscusstongzhuangshangchengEntity> page = this.selectPage(
                new Query<DiscusstongzhuangshangchengEntity>(params).getPage(),
                new EntityWrapper<DiscusstongzhuangshangchengEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscusstongzhuangshangchengEntity> wrapper) {
		  Page<DiscusstongzhuangshangchengView> page =new Query<DiscusstongzhuangshangchengView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DiscusstongzhuangshangchengVO> selectListVO(Wrapper<DiscusstongzhuangshangchengEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DiscusstongzhuangshangchengVO selectVO(Wrapper<DiscusstongzhuangshangchengEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DiscusstongzhuangshangchengView> selectListView(Wrapper<DiscusstongzhuangshangchengEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscusstongzhuangshangchengView selectView(Wrapper<DiscusstongzhuangshangchengEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
