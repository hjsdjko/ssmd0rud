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


import com.dao.TongzhuangshangchengDao;
import com.entity.TongzhuangshangchengEntity;
import com.service.TongzhuangshangchengService;
import com.entity.vo.TongzhuangshangchengVO;
import com.entity.view.TongzhuangshangchengView;

@Service("tongzhuangshangchengService")
public class TongzhuangshangchengServiceImpl extends ServiceImpl<TongzhuangshangchengDao, TongzhuangshangchengEntity> implements TongzhuangshangchengService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<TongzhuangshangchengEntity> page = this.selectPage(
                new Query<TongzhuangshangchengEntity>(params).getPage(),
                new EntityWrapper<TongzhuangshangchengEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<TongzhuangshangchengEntity> wrapper) {
		  Page<TongzhuangshangchengView> page =new Query<TongzhuangshangchengView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<TongzhuangshangchengVO> selectListVO(Wrapper<TongzhuangshangchengEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public TongzhuangshangchengVO selectVO(Wrapper<TongzhuangshangchengEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<TongzhuangshangchengView> selectListView(Wrapper<TongzhuangshangchengEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public TongzhuangshangchengView selectView(Wrapper<TongzhuangshangchengEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}
