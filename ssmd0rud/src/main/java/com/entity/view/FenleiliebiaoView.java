package com.entity.view;

import com.entity.FenleiliebiaoEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 分类列表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-03-09 13:27:13
 */
@TableName("fenleiliebiao")
public class FenleiliebiaoView  extends FenleiliebiaoEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public FenleiliebiaoView(){
	}
 
 	public FenleiliebiaoView(FenleiliebiaoEntity fenleiliebiaoEntity){
 	try {
			BeanUtils.copyProperties(this, fenleiliebiaoEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
