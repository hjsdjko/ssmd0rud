package com.entity.view;

import com.entity.DiscusstongzhuangshangchengEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 童装商城评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
@TableName("discusstongzhuangshangcheng")
public class DiscusstongzhuangshangchengView  extends DiscusstongzhuangshangchengEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscusstongzhuangshangchengView(){
	}
 
 	public DiscusstongzhuangshangchengView(DiscusstongzhuangshangchengEntity discusstongzhuangshangchengEntity){
 	try {
			BeanUtils.copyProperties(this, discusstongzhuangshangchengEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
