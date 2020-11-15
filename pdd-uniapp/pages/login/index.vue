<template>
	<view>
		<view>
			<uni-forms ref="form" v-model="formData" :rules="rules" @submit="submitForm">
				<uni-forms-item label="姓名" name="name" placeholder="请输入昵称">
					<input class="input-name" v-model="formData.name" type="text" placeholder="请输入昵称" @input="binddata('name', $event.detail.value)" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="passwd" placeholder="请输入密码">
					<input class="input-passwd" v-model="formData.passwd" type="password" placeholder="请输入密码" @input="binddata('passwd', $event.detail.value)" />
				</uni-forms-item>
				<button @click="submit">登录</button>
			</uni-forms>
			<navigator url="/pages/register/index"><text>没有账户？赶紧注册一个吧！</text></navigator>
		</view>
		<!-- <navigator url="/pages/me/index"><button>登录</button></navigator> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				name: '张三',
				passwd: '123'
			},
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [
						{
							required: true,
							errorMessage: '请输入姓名'
						},
						{
							minLength: 2,
							maxLength: 7,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
						}
					]
				},
				// 对email字段进行必填验证
				passwd: {
					rules: [
						{
							format: 'password',
							errorMessage: '请输入正确的邮箱地址'
						}
					]
				}
			}
		};
	},
	methods: {
		submitForm(e) {
			//console.log(e);
			// value 表单数据,errors 校验信息
			const { value, errors } = e.detail;
			console.log('表单是否校验通过：', errors);
			console.log('表单数据信息：', value);
			// ... 提交逻辑
			uni.request({
				url: 'http://127.0.0.1:3000/login',
				data: {
					name: value.name,
					passwd: value.passwd
				},
				success: res => {
					//console.log(res);
					// 将登陆信息存入缓存
					uni.setStorage({
					    key: 'user_key',
					    data: {
							name: value.name,
							passwd: value.passwd
						},
					    success: ()=> {
					        console.log('存储数据成功');
					    }
					});
					uni.switchTab({
						url:'/pages/me/index'
					});
				}
			});
		},
		// 触发提交表单
		submit() {
			this.$refs.form.submit();
		}
	}
};
</script>

<style lang="scss"></style>
