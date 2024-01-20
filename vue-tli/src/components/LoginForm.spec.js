import sum from './Math';
import LoginForm from './common/LoginForm.vue';
import { mount } from '@vue/test-utils';
// import { shallowMount } from '@vue/test-utils';

sum(10, 20); //30;
describe('LoginForm.vue', () => {
	test('컴포넌트 마운팅되면 화면에 보여져야한다.', () => {
		const wrapper = mount(LoginForm, {
			shallow: true,
		});
		// const todo = wrapper.get('[data-test="id"]');/
		//find는 를 찾을 수 있다
		const idInput = wrapper.find('#id');
		idInput.setValue('test');
		const idErr = wrapper.find('.error');
		expect(idErr.exists()).toBeTruthy();
	});

	test('Id와 비번이 입력되지 않으면 로그인 버튼이 비활성화 되어야한다.', async () => {
		const wrapper = mount(LoginForm);
		await wrapper.find('#id').setValue('a@a.com');
		await wrapper.find('#password').setValue('');
		const btn = wrapper.find('.btn');
		console.log(btn.element.disabled);
		expect(btn.element.disabled).toBeTruthy();
	});
});
